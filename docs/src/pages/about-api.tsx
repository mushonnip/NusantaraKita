import type { ProfileCardProps } from '@/components/ui/profile-card';
import { ProfileCard } from '@/components/ui/profile-card';

const developers: ProfileCardProps[] = [
  {
    name: 'M Mupid Ahmadiawan',
    role: 'Backend Developer',
    avatarUrl: '/mupidahmadiawan.jpeg',
    socialLinks: [
      { type: 'github', url: 'https://github.com/Yuefii' },
      {
        type: 'linkedin',
        url: 'https://www.linkedin.com/in/muhamad-mupid-ahmadiawan-3b2a95292/',
      },
    ],
  },
  {
    name: 'Abdillah Juniansyah',
    role: 'Frontend Developer',
    avatarUrl: '/abdillahjuniansyah.jpeg',
    socialLinks: [
      { type: 'github', url: 'https://github.com/dillahCodes' },
      {
        type: 'linkedin',
        url: 'https://www.linkedin.com/in/abdillahjuniansyah/',
      },
    ],
  },
  {
    name: 'Arif Ramdhan',
    role: 'Data Engineer',
    avatarUrl: 'arifrhamadan.jpeg',
    socialLinks: [
      { type: 'github', url: 'https://github.com/arifrhamadan' },
      { type: 'linkedin', url: 'https://www.linkedin.com/in/arifrhamadan' },
    ],
  },
];

const AboutApi = () => {
  return (
    <section className="max-w-5xl bg-white p-6">
      <div className="mb-4 flex flex-col items-start">
        <img
          src="/logo.png"
          alt="Nusantara Kita Logo"
          className="mb-4 size-40"
        />
        <h2 className="mb-3 text-3xl font-bold text-gray-800">
          Nusantara Kita
        </h2>
        <p className="text-base leading-relaxed text-gray-600">
          Nusantara Kita adalah sebuah API yang menyediakan data wilayah
          Indonesia. Proyek ini dirancang untuk memudahkan akses dan penggunaan
          data geospasial terkait wilayah-wilayah di Indonesia. API ini dapat
          digunakan untuk berbagai aplikasi yang memerlukan informasi seperti
          batas wilayah, data administratif, dan lain-lain.
        </p>
      </div>

      <div className="mb-10">
        <h3 className="mb-4 text-2xl font-semibold text-gray-800">
          Sumber Data
        </h3>
        <p className="leading-relaxed text-gray-700">
          Data yang disajikan dalam API Nusantara Kita dikompilasi dari berbagai
          sumber resmi dan terpercaya. Data wilayah administratif pemerintahan
          Indonesia sesuai{' '}
          <span className="font-semibold">
            {' '}
            Kepmendagri No 300.2.2-2138 Tahun 2025
          </span>
          . Kami berkomitmen untuk terus memperbarui data secara berkala guna
          menjaga relevansi dan keandalannya.
        </p>
      </div>

      <div className="mb-10">
        <h3 className="mb-4 text-2xl font-bold text-gray-800">References</h3>
        <p className="mb-4 leading-relaxed text-gray-700">
          Dataset yang digunakan dalam project ini berasal dari:
        </p>
        <ul className="mb-4 text-blue-500">
          <li className="hover:underline">
            <a href="https://github.com/cahyadsn/wilayah_boundaries">
              https://github.com/cahyadsn/wilayah_boundaries
            </a>
          </li>
          <li className="hover:underline">
            <a href="https://github.com/cahyadsn/wilayah_kodepos">
              https://github.com/cahyadsn/wilayah_kodepos
            </a>
          </li>
        </ul>
        <p className="mb-4 leading-relaxed text-gray-700">
          Kami sangat menghargai pembuat dataset ini. Tanpa adanya data
          tersebut, project ini tidak akan bisa dikembangkan.
        </p>
      </div>

      <div className="mb-10">
        <h3 className="mb-4 text-2xl font-semibold text-gray-800">
          Tim Pengembang
        </h3>
        <p className="mb-6 leading-relaxed text-gray-700">
          API Nusantara Kita dikembangkan dan dikelola oleh tim yang terdiri
          dari 3 pengembang aktif. Project ini merupakan inisiatif untuk
          menyediakan akses data wilayah Indonesia yang terbuka dan mudah
          digunakan bagi komunitas pengembang.
        </p>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {developers.map((dev) => (
            <ProfileCard
              key={dev.name}
              {...dev}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutApi;
