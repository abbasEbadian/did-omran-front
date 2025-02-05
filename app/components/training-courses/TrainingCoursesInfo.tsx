import Image, { StaticImageData } from 'next/image';
import { CourseType } from '@/api/types';

interface CourseFeature {
  icon: StaticImageData;
  label: string;
  value: string;
}

const TrainingCoursesInfo = (course: CourseType) => {
  const courseFeatures: CourseFeature[] = course.attributes.map(q => ({
    icon: q.attribute.icon ,
    label: q.attribute.name,
    value: q.name
  }))


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