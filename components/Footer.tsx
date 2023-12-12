import styles from './StylesCommon.module.css'
export default function Footer() {
  return (
    <footer className={styles.footerbg}>
      <div className="mx-auto max-w-screen-xl">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="https://meshjs.dev/" className="flex items-center">
              <img
                src="/Logo.png"
                className="mr-3 h-8"
                alt="Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Estate Ledger
              </span>
            </a>
          </div>
          <div className="grid grid-cols-1 gap-8 text-gray-900 dark:text-white">
            <div>
              <h2 className="mt-6 text-sm font-semibold uppercase">
              Build with ❤️ by KONMA
              </h2>
      

              
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
