import Image from "next/image"


type props = {
  imageName: string,
  CategoryName: string,
  CoursesInCategory: string
}

export default function CategoryCard({imageName, CategoryName, CoursesInCategory}: props) {
  return (
    <div className="mx-3 md:mx-0 w-[350px] md:w-[410px] h-[110px] bg-[#f7f7f7] flex justify-center items-center gap-6">
      <div className="w-[80px] h-[80px] rounded-md bg-white flex justify-center items-center">
        <Image src={`/images/categories/${imageName}`} alt="volume" height={20} width={20}/>
      </div>

      <div>
        <h2 className="font-roboto font-semibold md:font-xl">{CategoryName}</h2>
        <p className="font-roboto">{CoursesInCategory}</p>
      </div>

    </div>
  )
}
