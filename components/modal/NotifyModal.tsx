interface ContentType {
  title: string;
  text: string;
}

interface NotifyModalProps {
  data: ContentType;
  onClose: () => void;
}

function NotifyModal({ data, onClose }: NotifyModalProps) {
  return (
    <div className='fixed inset-0 z-50 flex flex-col items-center justify-center gap-6 bg-black opacity-90'>
      <h1 className='text-2xl font-bold text-white'>{data.title}</h1>
      <p className='text-xl font-medium text-white'>{data.text}</p>
      <button
        onClick={onClose}
        className='mt-4 rounded-lg bg-slate-200 px-4 py-3 font-medium text-text-darkGray'
      >
        Close
      </button>
    </div>
  );
}

export default NotifyModal;
