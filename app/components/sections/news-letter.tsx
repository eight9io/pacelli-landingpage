import clsx from 'clsx';

interface NewsLetterProps {
  className?: string;
}

const NewsLetter: React.FC<NewsLetterProps> = ({className = ''}) => {
  return (
    <section className={clsx('border-t border-neutral-200', className)}>
      <div className="base-container py-10 text-center">
        <h4 className="text-base mb-4">Subscribe to our emails</h4>
        <form>
          <label htmlFor="email" className="group">
            <input
              id="email"
              type="text"
              placeholder="Email"
              className="input focus:outline-offset-0 focus:outline-w-[1px] focus:outline-1 rounded-sm input-primary w-full max-w-sm"
              autoFocus={false}
            />
            <span className="hidden group-focus:block">Email</span>
          </label>
        </form>
      </div>
    </section>
  );
};

export default NewsLetter;
