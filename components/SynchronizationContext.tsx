import { createContext, useState, useContext, useEffect, useCallback, useRef } from 'react';

import { useSetRecoilState } from 'recoil';

import { useChangeIsSynchronizing } from '../hooks/useChangeIsSynchronizing';
import { useChangeSynchronizingProgress } from '../hooks/useChangeSynchronizingProgress';
import { isOnlineState } from '../states/isOnlineState';

export interface Synchronization {
  setUnsynchronizedFunction: (func: () => () => Promise<boolean> | Promise<number>) => void;
}

const SynchronizationContext = createContext<Synchronization | null>(null);

export const useSynchronizationContext = () => {
  return useContext(SynchronizationContext);
};

export const SynchronizationProvider = ({ children }: { children: any }) => {
  const changeIsSynchronizing = useChangeIsSynchronizing();
  const changeSynchronizingProgress = useChangeSynchronizingProgress();

  const unsynchronizedFunction = useRef<(() => () => Promise<boolean> | Promise<number>)[]>([]);
  const [standby, setStandby] = useState(false);
  const synchronizing = useRef(false);

  const setIsOnline = useSetRecoilState(isOnlineState);

  const setUnsynchronizedFunction = async (
    func: () => () => Promise<boolean> | Promise<number>,
  ) => {
    unsynchronizedFunction.current.push(func);
    setStandby(true);
  };

  const synchronizationProcess = useCallback(async () => {
    synchronizing.current = true;

    // 同期画面を表示
    changeIsSynchronizing(true);
    const total = unsynchronizedFunction.current.length;
    changeSynchronizingProgress(0);

    for (let i = 0; unsynchronizedFunction.current.length > 0; i++) {
      const func = unsynchronizedFunction.current[0];

      const executionFunction = func();
      const result = await executionFunction();

      if (result === true || result !== -1) {
        unsynchronizedFunction.current.shift();
        changeSynchronizingProgress(((i + 2) / total) * 100);
      } else {
        break;
      }
    }

    if (unsynchronizedFunction.current.length === 0) {
      setStandby(false);
    }

    // 同期画面を非表示
    changeIsSynchronizing(false);

    synchronizing.current = false;
  }, [changeIsSynchronizing, changeSynchronizingProgress]);

  useEffect(() => {
    window.addEventListener('online', checkOnline);
    window.addEventListener('offline', checkOnline);
    return () => {
      window.removeEventListener('online', checkOnline);
      window.removeEventListener('offline', checkOnline);
    };
  });

  const checkOnline = () => {
    if (navigator.onLine) {
      if (standby) {
        synchronizationProcess();
      }
      setIsOnline(true);
    } else {
      setIsOnline(false);
    }
  };

  const value: Synchronization = {
    setUnsynchronizedFunction: setUnsynchronizedFunction,
  };

  return (
    <SynchronizationContext.Provider value={value}>{children}</SynchronizationContext.Provider>
  );
};
