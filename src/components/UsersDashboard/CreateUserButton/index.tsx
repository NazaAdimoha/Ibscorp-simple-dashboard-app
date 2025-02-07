import { useState } from 'react';
import { motion } from 'framer-motion';
import { UserForm } from '../../Forms/UsersForm';
import { XIcon } from 'lucide-react';

export const CreateUserButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <button
          className="inline-flex border border-gray-200 px-3 py-2 disabled:bg-boxdark items-center justify-center whitespace-nowrap rounded-lg text-sm font-semibold ring-offset-secondary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
          onClick={() => setIsOpen(true)}
        >
          Create New User
        </button>
      </motion.div>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg w-full max-w-md"
          >
            <div className='flex items-center justify-between'>
                <h2 className="text-xl font-bold mb-4 dark:text-white">
                Create New User
                </h2>

                <span className='flex justify-center items-center '>
                    <XIcon onClick={() => setIsOpen(false)} className='w-6 h-6 cursor-pointer' />{" "}
                </span>
            </div>
            <div className='border border-gray-400 w-full mt-2 mb-3'></div>   
            <UserForm
              onCancel={() => setIsOpen(false)}
              onSubmitSuccess={() => setIsOpen(false)}
            />
          </motion.div>
        </div>
      )}
    </>
  );
};
