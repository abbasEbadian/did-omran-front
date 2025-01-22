import LogoLogin from '@/app/components/icons/logo-login.svg';
import Login from '@/app/components/login-register/Login';
import Image from 'next/image';

const LoginPage: React.FC = () => {
  return (
    <div className="min-h-screen flex">
      {/* بخش آبی (نصف صفحه) */}
      <div className="w-1/2 bg-did flex items-center justify-center relative">
        <Image
            src={LogoLogin}
            alt="LogoLogin Img"
            height={420} width={420} className="w-ful l object-cover rounded-full absolute left-0 top-0"/>
      </div>

        <Login/>
    </div>
  );
};

export default LoginPage;