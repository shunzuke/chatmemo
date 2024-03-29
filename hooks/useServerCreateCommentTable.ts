import { useRecoilValue } from 'recoil';

import axios from 'axios';

import { useCreateDemoID } from './useCreateDemoID';
import { useManageTentativeIDContext } from '../components/ManageTentativeIDContext';
import { authUserState } from '../states/authUserState';
import { Comment } from '../types/index';
import { convertSendComment } from '../utils/convertSendComment';

export const useServerCreateCommentTable = () => {
  const user = useRecoilValue(authUserState);
  const manageID = useManageTentativeIDContext();
  const createDemoID = useCreateDemoID();

  const serverCreateCommentTable = async (id: string, comment: Comment): Promise<number> => {
    const sendID = manageID?.getConfirmedID(id) ?? id;

    let response = -1;
    if (user) {
      await axios
        .post(
          `${process.env.NEXT_PUBLIC_API_URL}/api/v1/users/${user.uid}/memos/${sendID}/comments`,
          convertSendComment(comment),
        )
        // API Routes バージョン
        /* .post(`/api/users/${user.uid}/memos/${sendID}/comments`, convertSendComment(comment)) */
        .then((res) => {
          if (res.data.status === 200) {
            const serverRegisteredID = res.data.data.id;
            response = serverRegisteredID;
          }
        })
        .catch((err) => {});
    } else {
      response = createDemoID();
    }

    return response;
  };

  return serverCreateCommentTable;
};
