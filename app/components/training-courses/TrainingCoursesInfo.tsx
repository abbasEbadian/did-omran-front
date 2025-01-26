import Image, { StaticImageData } from 'next/image';
import IoRibbonOutline from '@/app/components/icons/IoRibbonOutline.svg';
import BsPuzzle from '@/app/components/icons/BsPuzzle.svg';
import Grid4 from '@/app/components/icons/grid-4.svg';
import MessageSquareLines from '@/app/components/icons/message-square-lines.svg';
import ChartVertical from '@/app/components/icons/chart-vertical.svg';
import Dna from '@/app/components/icons/dna.svg';

interface CourseFeature {
  icon: StaticImageData;
  label: string;
  value: string;
}

const TrainingCoursesInfo: React.FC = () => {

  const courseFeatures: CourseFeature[] = [
    { icon: Dna, label: 'نوع دوره', value: 'مجازی و دانلودی' },
    { icon: ChartVertical, label: 'سطح دوره', value: 'مجازی و دانلودی' },
    { icon: MessageSquareLines, label: 'ارتباط مستقیم با مدرس', value: 'دارد' },
    { icon: Grid4, label: 'جعبه ابزار همراه دوره', value: 'ندارد' },
    { icon: BsPuzzle, label: 'تعداد تمرین', value: 'دارد' },
    { icon: IoRibbonOutline, label: 'گواهی پایان دوره', value: 'بله' },
  ];

  return (
    <div className="space-y-3">
      {courseFeatures.map((feature, index) => (
        <div
          key={index}
          className={`flex items-center justify-between ${
            index !== courseFeatures.length - 1
              ? 'border-b-2 border-b-secondary700 border-dashed pb-3'
              : 'pb-0'
          }`}
        >
          <div className="flex items-center gap-2">
            <Image src={feature.icon} alt={`${feature.label} icon`} height={24} width={24} />
            <span className="text-secondary900 text-xs">{feature.label}</span>
          </div>
          <span className="text-blue text-xs font-black">{feature.value}</span>
        </div>
      ))}
    </div>
  );
};

export default TrainingCoursesInfo;