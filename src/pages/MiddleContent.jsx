import coversation from '../assets/conversation.gif';

const MiddleContent = () => {
  return (
    <div className='flex items-center justify-center text-center mt-10 md:mt-20'>
      <div>
        <h1 className='text-4xl font-bold text-[#89CADE]'>Please Click on a Chat, <br /><span className='text-2xl font-bold text-[#FFFAF1]'> Start a Conversation.</span></h1>
        <img src={coversation} alt='Conversaion' className='w-60 h-60' />
      </div>
    </div>
  );
};

export default MiddleContent;