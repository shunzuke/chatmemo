import { useState, useEffect } from 'react';

import { useRecoilValue } from 'recoil';
import { useSetRecoilState } from 'recoil';

import ClearIcon from '@mui/icons-material/Clear';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

import { AddButton } from '../components/AddButton';
import { useGetIsEditing } from '../components/Main';
import { Mask } from '../components/Mask';
import { useSettingInfoContext } from '../components/SettingInfoContext';
import { useDarkMode } from '../hooks/useDarkMode';
import { useMobileKeyboardOpen } from '../hooks/useMobileKeyboardOpen';
import { useOperateCreateData } from '../hooks/useOperateCreateData';
import { addingContentIDState } from '../states/addingContentIDState';
import { isMobileState } from '../states/isMobileState';
import { hasValidString } from '../utils/hasValidString';

export const InputText = () => {
  const [value, setValue] = useState('');
  const [height, setHeight] = useState(0);

  const isEditing = useGetIsEditing();

  const createData = useOperateCreateData();

  const settingInfo = useSettingInfoContext();
  const setting = settingInfo?.setting;

  const isMobile = useRecoilValue(isMobileState);
  const mobileKeyboardOpen = useMobileKeyboardOpen();

  const darkMode = useDarkMode();

  const setAddingContentID = useSetRecoilState(addingContentIDState);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    // Shiftが押されていないEnterでメモの作成を行う
    if (setting?.push_with_enter && !isMobile) {
      if (event.key === 'Enter' && !event.shiftKey && event.keyCode === 13) {
        event.preventDefault();
        if (hasValidString(value)) {
          createMemo();
        }
      }
    }
  };

  const createMemo = () => {
    createData(value);
    setValue('');
  };

  const handleClickInputArea = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();

    if (!(isMobile && !mobileKeyboardOpen)) {
      // メモ投稿後も入力欄へのフォーカスを維持する
      document.getElementById('input')?.focus();
    }
  };

  const handleClickClearCharacter = () => {
    setValue('');

    // 入力文字クリア後も入力欄へのフォーカスを維持する
    if (!(isMobile && !mobileKeyboardOpen)) {
      document.getElementById('input')?.focus();
    }
  };

  useEffect(() => {
    // HACK: 正しいオブジェクトサイズを取得するためにsetTimeoutで暫定対応
    setTimeout(() => {
      // マスクサイズを取得する
      const element = document.getElementsByClassName('bottom-bar');
      if (element.length === 0) return;
      setHeight(element[0].clientHeight);
    }, 1);
  });

  useEffect(() => {
    if (!mobileKeyboardOpen) {
      setAddingContentID(undefined);
    }
    // setAddingContentIDは依存関係に入れない
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mobileKeyboardOpen]);

  return (
    <>
      <Stack
        direction='row'
        spacing={1}
        sx={{ maxWidth: '100vw', pr: 2, pl: 2 }}
        onClick={handleClickInputArea}
      >
        <TextField
          id='input'
          multiline
          maxRows={5}
          value={value}
          size='small'
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          sx={{
            width: 500,
            '& > div': { borderRadius: '20px', pl: 2.4 },
            '& .MuiInputBase-input': {
              zIndex: 10,
            },
            '& .MuiOutlinedInput-root': {
              '&.Mui-focused fieldset': {
                border: 'none',
                backgroundColor: darkMode
                  ? (theme) => theme.palette.grey[700]
                  : (theme) => theme.palette.grey[300],
              },
              '&:hover fieldset': {
                border: 'none',
                backgroundColor: darkMode
                  ? (theme) => theme.palette.grey[700]
                  : (theme) => theme.palette.grey[300],
              },
            },
          }}
          disabled={isEditing}
          InputProps={{
            // 擬似placeholder（Safariの速度低下対応）
            startAdornment: (
              <InputAdornment position='start' sx={{ mr: 0, mt: 0.3 }}>
                {!Boolean(value) && (
                  <InputLabel
                    htmlFor='input'
                    sx={{ position: 'fixed', color: 'text.disabled', mb: 0.3, zIndex: 10 }}
                  >
                    {'メモを入力'}
                  </InputLabel>
                )}
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position='end'>
                {Boolean(value) && (
                  <IconButton
                    aria-label='clear input character'
                    onClick={handleClickClearCharacter}
                    edge='end'
                    sx={{ zIndex: 10 }}
                  >
                    <ClearIcon />
                  </IconButton>
                )}
              </InputAdornment>
            ),
          }}
        />
        <AddButton hasValidString={hasValidString(value)} createMemo={createMemo} />
      </Stack>
      <Mask
        height={`${height}px`}
        top={{ xs: `calc(100% - ${height}px)`, sm: `calc(100%  - ${height}px)` }}
      />
    </>
  );
};
