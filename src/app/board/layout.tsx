'use client';

import { useSelector } from 'react-redux';
import ToastUI from '@/components/ToastUI';
import useAlertTimer from '@/hooks/useAlertTimer';
import { createPostState, deletePostState, updatePostState } from '@/store/slices/alertSlice';
import { RootAlertState } from '@/types/alertStore';

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  const updateAlert = useSelector((state: RootAlertState) => state.alert.updateState);
  const createAlert = useSelector((state: RootAlertState) => state.alert.createState);
  const deleteAlert = useSelector((state: RootAlertState) => state.alert.deleteState);

  useAlertTimer(updateAlert, null, () => updatePostState(false));
  useAlertTimer(createAlert, null, () => createPostState(false));
  useAlertTimer(deleteAlert, null, () => deletePostState(false));

  return (
    <>
      {children}
      {updateAlert && <ToastUI message="성공적으로 글이 수정되었습니다." />}
      {createAlert && <ToastUI message="성공적으로 글이 추가되었습니다." />}
      {deleteAlert && <ToastUI message="성공적으로 글이 삭제되었습니다." />}
    </>
  );
}
