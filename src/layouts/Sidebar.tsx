const Sidebar: React.FC = () => {
  return (
    <div className="w-[20%] bg-light-primary dark:bg-dark-surface p-6 border-r border-gray-200 dark:border-gray-700">
      <div className="mb-8">
        <h3 className="text-lg font-bold text-gray-800 dark:text-gray-100 mb-4">Category</h3>
        <div className="space-y-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="category1"
              className="w-4 h-4 text-custom-orange border-gray-300 dark:border-gray-600 rounded focus:ring-custom-orange dark:bg-dark-primary"
              defaultChecked
            />
            <label htmlFor="category1" className="ml-2 text-sm text-gray-700 dark:text-gray-300">
              Category 1
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="category2"
              className="w-4 h-4 text-custom-orange border-gray-300 dark:border-gray-600 rounded focus:ring-custom-orange dark:bg-dark-primary"
              defaultChecked
            />
            <label htmlFor="category2" className="ml-2 text-sm text-gray-700 dark:text-gray-300">
              Category 2
            </label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="category3"
              className="w-4 h-4 text-gray-300 dark:text-gray-500 border-gray-300 dark:border-gray-600 rounded focus:ring-custom-orange dark:bg-dark-primary"
            />
            <label htmlFor="category3" className="ml-2 text-sm text-gray-700 dark:text-gray-300">
              Category 3
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
