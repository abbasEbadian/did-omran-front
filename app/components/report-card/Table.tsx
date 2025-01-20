import Image from 'next/image'
import LogoDid from '@/public/img/Logo-blue.png'
import profile2 from '@/public/img/profile2.jpg'

function ReportTableimport React from 'react';

type TableProps = {
  data: { title: string; size: string }[];
};

const Table: React.FC<TableProps> = ({ data }) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">عنوان</th>
            <th className="py-2 px-4 border-b">اندازه</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border-b text-center">{item.title}</td>
              <td className="py-2 px-4 border-b text-center">{item.size}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;() {
  return (
    <>
      
    </>
  )
}

export default ReportTableimport React from 'react';

type TableProps = {
  data: { title: string; size: string }[];
};

const ReportTable: React.FC<TableProps> = ({ data }) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">عنوان</th>
            <th className="py-2 px-4 border-b">اندازه</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border-b text-center">{item.title}</td>
              <td className="py-2 px-4 border-b text-center">{item.size}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;