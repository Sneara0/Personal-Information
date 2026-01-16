
interface SectionTitleProps {
  title: string;
}

const SectionTitle = ({ title }: SectionTitleProps) => {
  return (
    <h2 className="text-3xl md:text-4xl font-bold text-white-900 dark:text-white mb-6 relative before:absolute before:-bottom-2 before:left-0 before:w-24 before:h-1 before:bg-indigo-600 dark:before:bg-indigo-400">
      {title}
    </h2>
  );
};

export default SectionTitle; 
