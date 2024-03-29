import { useSetRecoilState } from 'recoil';

import { displayingMemoState } from '../states/displayingMemoState';
import { memoState } from '../states/memoState';

export const useLocalDeleteMemo = () => {
  const setMemo = useSetRecoilState(memoState);
  const setFilteredMemo = useSetRecoilState(displayingMemoState);

  const localDeleteMemo = (memoId: string) => {
    // オリジナルデータを更新
    setMemo((prevState) => prevState.filter((value) => value._id !== memoId));

    // 表示中のデータを更新
    setFilteredMemo((prevState) => prevState.filter((value) => value._id !== memoId));
  };
  return localDeleteMemo;
};
