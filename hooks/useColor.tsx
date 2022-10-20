import { useDarkMode } from './useDarkMode';

export const useBarBackground = () => {
  const darkMode = useDarkMode();

  return { backgroundColor: darkMode ? '#222222dd' : '#ffffffdd' };
};

export const useMaskBackground = () => {
  const darkMode = useDarkMode();

  return { backgroundColor: darkMode ? '#00000055' : '#ffffffaa' };
};

export const useLightModeColor = () => {
  const darkMode = useDarkMode();

  return darkMode ? null : 'primary.main';
};

export const useMemoBackground = () => {
  const darkMode = useDarkMode();

  return darkMode ? 'grey.900' : 'grey.300';
};

export const useCommentBackground = () => {
  const darkMode = useDarkMode();

  return darkMode ? 'grey.800' : 'grey.400';
};