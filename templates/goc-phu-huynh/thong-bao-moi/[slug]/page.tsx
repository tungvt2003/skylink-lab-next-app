import BreadCrumb from "@/components/breadcrumb"
import CardPost from "@/components/card-post"
import { BreadCrumbItem } from "@/components/types/types"
import { Button } from "@/components/ui/button"
import { Images } from "@/constants/images"
import Image from "next/image"

export default function NewDetail() {
  const items: BreadCrumbItem[] = [
    {
      title: "Góc phụ huynh",
      url: "/goc-phu-huynh",
    },
    {
      title: "Detail Thông Báo Mới",
      url: "/goc-phu-huynh/detail",
    },
  ]
  return (
    <div className="container">
      <BreadCrumb items={items} />
      <div className="py-16 px-[7.5rem] flex flex-col gap-25">
        <div className="flex justify-center">
          <div className="flex flex-col gap-12 w-[45.25rem]">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <div className="text-[2rem] leading-12 font-semibold">
                  Lorem ipsum dolor sit nih amet consect adip elit, sed diam
                </div>
                <div className="text-base text-black-tertiary">Updated on May 23, 2024</div>
              </div>
              <div>
                <Image
                  src={Images.studentNew1}
                  alt="Student News"
                  className="w-full object-cover h-[19.8125rem] rounded-[1.25rem]"
                />
              </div>
              <div className="text-lg leading-7">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
                in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at
                vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis
                dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam
                nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="text-2xl">Lorem ipsum dolor sit </div>
              <div className="text-lg leading-7">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
                in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at
                vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis
                dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam
                nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="text-2xl">Lorem ipsum dolor sit </div>
              <div>
                <Image
                  src={Images.imageStaff}
                  alt="Student News"
                  className="w-full object-cover h-[19.8125rem] rounded-[1.25rem]"
                />
              </div>
              <div className="text-lg leading-7">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
                in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at
                vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis
                dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam
                nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="text-lg leading-6 font-semibold">Chia sẻ bài viết</div>
              <div className="flex gap-3">
                <Button className="p-[0.625rem] border rounded-[0.5rem] border-gray-tertiary bg-transparent hover:bg-transparent">
                  <Image src={Images.vectorTwitter} alt="Twitter" className="w-5 h-5" />
                </Button>
                <Button className="p-[0.625rem] border rounded-[0.5rem] border-gray-tertiary bg-transparent hover:bg-transparent">
                  <Image src={Images.vectorFacebook} alt="Facebook" className="w-5 h-5" />
                </Button>
                <Button className="p-[0.625rem] border rounded-[0.5rem] border-gray-tertiary bg-transparent hover:bg-transparent">
                  <Image src={Images.vectorLinkedin} alt="Linkedin" className="w-5 h-5" />
                </Button>
                <Button className="p-[0.625rem] border rounded-[0.5rem] border-gray-tertiary bg-transparent hover:bg-transparent">
                  <Image src={Images.vectorTwitterX} alt="TwitterX" className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="text-[2rem] leading-12 font-semibold">Bài viết liên quan</div>
          <div className="grid grid-cols-3 gap-12">
            {Array(3)
              .fill(0)
              .map((_, index) => {
                return <CardPost key={index} />
              })}
          </div>
        </div>
      </div>
    </div>
  )
}
