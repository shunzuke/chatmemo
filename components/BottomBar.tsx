import { useRecoilValue } from 'recoil';

import { Box } from '@mui/system';

import { InputText } from '../components/InputText';
import { Synchronizing } from '../components/Synchronizing';
import { selectedDisplayTypeState } from '../states/selectedDisplayTypeState';

export const BottomBar = () => {
  const selectedDisplayType = useRecoilValue(selectedDisplayTypeState);
  const idDisplay = selectedDisplayType.id === 1;

  return (
    <>
      {idDisplay && (
        <Box
          sx={{
            position: 'fixed',
            bottom: 0,
            width: '100%',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
            minHeight: { xs: 72, sm: 80 },
            pt: { xs: 2, sm: 2.5 },
            pb: { xs: 2, sm: 2.5 },
            opacity: 0.8,
          }}
          className='bottom-bar fouc-bar-color'
        >
          <Synchronizing progress={false} />
          <InputText />
        </Box>
      )}
    </>
  );
};
