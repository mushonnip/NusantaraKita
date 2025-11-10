import Code from '@/components/ui/code';
import { useIsMobile } from '@/hooks/use-mobile';
import { useIsTablet } from '@/hooks/use-tablet';
import { cn } from '@/lib/utils';

const cloneCommand = [
  'git clone --filter=blob:none --no-checkout https://github.com/Yuefii/NusantaraKita.git && cd NusantaraKita && git sparse-checkout set api data && git checkout',
].join('\n');

export const InstalationGuide = () => {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const isSmallScreen = isMobile || isTablet;

  return (
    <section
      className={cn('max-w-5xl bg-white text-gray-800', {
        'p-5': isSmallScreen,
        'p-8': !isSmallScreen,
      })}
    >
      <h1 className="mb-10 text-3xl font-bold text-gray-700">
        API Documentation - Installation Guide
      </h1>

      {/* Section Clone */}
      <div className="mb-10">
        <h2 className="mb-4 text-xl font-semibold text-gray-600">
          Clone Repository
        </h2>
        <p className="mb-4 leading-relaxed text-gray-600">
          Clone project NusantaraKita ke local kamu menggunakan perintah
          berikut:
        </p>
        <Code
          content={cloneCommand}
          showCopyButton
        />
      </div>

      {/* Section Masuk API Directory */}
      <div className="mb-10">
        <h2 className="mb-4 text-xl font-semibold text-gray-600">
          Masuk ke Direktori API
        </h2>
        <Code
          content={`cd api`}
          showCopyButton
        />
      </div>

      {/* Section Setup Env */}
      <div className="mb-10">
        <h2 className="mb-4 text-xl font-semibold text-gray-600">
          Setup Environment
        </h2>
        <Code
          content={`cp .env.example .env`}
          showCopyButton
        />
      </div>

      {/* Section Virtual Environment */}
      <div className="mb-10">
        <h2 className="mb-4 text-xl font-semibold text-gray-600">
          Menjalankan Project dengan pip
        </h2>

        <div className="mb-6">
          <h3 className="mb-2 text-lg font-medium text-gray-600">
            Buat Virtual Environment
          </h3>
          <Code
            content={`python -m venv venv`}
            showCopyButton
          />
        </div>

        <div className="mb-6">
          <h3 className="mb-2 text-lg font-medium text-gray-600">
            Aktifkan Virtual Environment
          </h3>
          <Code
            content={`source venv/bin/activate`}
            showCopyButton
          />
        </div>

        <div className="mb-6">
          <h3 className="mb-2 text-lg font-medium text-gray-600">
            Install Dependencies
          </h3>
          <Code
            content={`pip install -r requirements.txt`}
            showCopyButton
          />
        </div>

        <div className="mb-6">
          <h3 className="mb-2 text-lg font-medium text-gray-600">
            Jalankan Project
          </h3>
          <Code
            content={`uvicorn main:app --reload`}
            showCopyButton
          />
        </div>

        <div className="mb-6">
          <h3 className="mb-2 text-lg font-medium text-gray-600">
            Testing Project
          </h3>
          <Code
            content={`pytest tests/`}
            showCopyButton
          />
        </div>
      </div>
      
      {/* Section Running API with Docker */}
      <div className="mb-10">
        <h2 className="mb-4 text-xl font-semibold text-gray-600">
          Menjalankan Project dengan Docker
        </h2>
        <p className="mb-4 leading-relaxed text-gray-600">
          Setelah clone project kamu bisa menjalankan project dengan mudah menggunakan perintah:
        </p>
        <Code
          content={`docker-compose up -d`}
          showCopyButton
        />
      </div>
    </section>
  );
};
