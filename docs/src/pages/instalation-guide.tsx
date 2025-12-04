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

      {/* Section Setup Env */}
      <div className="mb-10 space-y-4">
        <h2 className="text-xl font-semibold text-gray-600">
          Setup Environment
        </h2>
        <Code
          content={`cd api`}
          showCopyButton
        />
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
          <p className="mb-4 leading-relaxed text-gray-600">
            Buat Virtual Environment
          </p>
          <Code
            content={`python -m venv venv`}
            showCopyButton
          />
        </div>

        <div className="mb-6">
          <p className="mb-4 leading-relaxed text-gray-600">
            Aktifkan Virtual Environment
          </p>
          <Code
            content={`source venv/bin/activate`}
            showCopyButton
          />
        </div>

        <div className="mb-6">
          <p className="mb-4 leading-relaxed text-gray-600">
            Install Dependencies
          </p>
          <Code
            content={`pip install -r requirements.txt`}
            showCopyButton
          />
        </div>

        <div className="mb-6">
          <p className="mb-4 leading-relaxed text-gray-600">Jalankan Project</p>
          <Code
            content={`uvicorn main:app --reload`}
            showCopyButton
          />
        </div>

        <div className="mb-6">
          <p className="mb-4 leading-relaxed text-gray-600">Testing Project</p>
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

        <div className="mb-6">
          <p className="mb-4 leading-relaxed text-gray-600">
            Setup Environment Variables
          </p>
          <Code
            content={`cp .env.example .env`}
            showCopyButton
          />
          <p className="mt-4 leading-relaxed text-gray-600">
            Silakan sesuaikan <code>.env</code> atau gunakan default:
          </p>
          <Code
            content={`# Database Configuration
MYSQL_ROOT_PASSWORD=rootpassword
MYSQL_USER=user
MYSQL_PASSWORD=password
MYSQL_DB=nusantarakita

# Port Configuration
DB_PORT=3307        # Port untuk database MySQL
API_PORT=8000       # Port untuk API
DOCS_PORT=3000      # Port untuk dokumentasi`}
            showCopyButton
          />
        </div>

        <div className="mb-6">
          <p className="mb-4 leading-relaxed text-gray-600">
            Menjalankan semua services (database, API, dan dokumentasi)
          </p>
          <Code
            content={`docker-compose up -d`}
            showCopyButton
          />
        </div>

        <div className="mb-6">
          <p className="mb-4 leading-relaxed text-gray-600">
            Atau gunakan perintah ini untuk memperbarui docker image:
          </p>
          <Code
            content={`docker-compose pull && docker-compose up -d`}
            showCopyButton
          />
        </div>

        <div className="mb-6">
          <p className="mb-4 leading-relaxed text-gray-600">
            Setelah services berjalan, Anda dapat mengakses:
          </p>
          <ul className="ml-6 list-disc space-y-2 text-gray-600">
            <li>
              <strong>API:</strong> http://localhost:8000 (atau port yang Anda
              set di <code>API_PORT</code>)
            </li>
            <li>
              <strong>Dokumentasi:</strong> http://localhost:3000 (atau port
              yang Anda set di <code>DOCS_PORT</code>)
            </li>
            <li>
              <strong>Database:</strong> localhost:3307 (atau port yang Anda set
              di <code>DB_PORT</code>)
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
