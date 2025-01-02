import "server-only"

const dictionaries: Record<string, () => Promise<any>> = {
  en: () =>
    fetch(`${process.env.BASE_URL || ""}/api/dictionaries`, {
      method: "POST",
      body: JSON.stringify({ locale: "en" }),
    }).then(res => res.json()),
  vi: () =>
    fetch(`${process.env.BASE_URL || ""}/api/dictionaries`, {
      method: "POST",
      body: JSON.stringify({ locale: "vi" }),
    }).then(res => res.json()),
}

const tmpDict = {
  data: [
    {
      id: 1,
      attributes: {
        key: "Liên hệ",
        vi: "Liên hệ",
        en: "Contact",
        createdAt: "2024-11-16T07:41:19.147Z",
        updatedAt: "2024-11-16T07:41:19.147Z",
      },
    },
    {
      id: 2,
      attributes: {
        key: "Nhập email của bạn để nhận thông tin",
        vi: "Nhập email của bạn để nhận thông tin",
        en: "Enter your email to receive information",
        createdAt: "2024-11-16T08:41:36.853Z",
        updatedAt: "2024-11-16T08:41:36.853Z",
      },
    },
    {
      id: 3,
      attributes: {
        key: "Đăng ký",
        vi: "Đăng ký",
        en: "Register",
        createdAt: "2024-11-16T08:41:49.464Z",
        updatedAt: "2024-11-16T08:41:49.464Z",
      },
    },
    {
      id: 4,
      attributes: {
        key: "Email không hợp lệ",
        vi: "Email không hợp lệ",
        en: "Email is invalid",
        createdAt: "2024-11-16T08:42:59.587Z",
        updatedAt: "2024-11-16T08:42:59.587Z",
      },
    },
    {
      id: 5,
      attributes: {
        key: "Email không được vượt quá 50 ký tự",
        vi: "Email không được vượt quá 50 ký tự",
        en: "Email must not exceed 50 characters",
        createdAt: "2024-11-16T08:43:10.187Z",
        updatedAt: "2024-11-16T08:43:10.187Z",
      },
    },
    {
      id: 6,
      attributes: {
        key: "Vui lòng nhập email của bạn",
        vi: "Vui lòng nhập email của bạn",
        en: "Please enter your email",
        createdAt: "2024-11-16T08:43:19.638Z",
        updatedAt: "2024-11-16T08:43:19.638Z",
      },
    },
    {
      id: 7,
      attributes: {
        key: "Vui lòng nhập tên của bạn",
        vi: "Vui lòng nhập tên của bạn",
        en: "Please enter your tên",
        createdAt: "2024-11-16T08:43:19.638Z",
        updatedAt: "2024-11-16T08:43:19.638Z",
      },
    },
    {
      id: 8,
      attributes: {
        key: "Vui lòng nhập số điện thoại của bạn",
        vi: "Vui lòng nhập số điện thoại của bạn",
        en: "Please enter your số điện thoại",
        createdAt: "2024-11-16T08:43:19.638Z",
        updatedAt: "2024-11-16T08:43:19.638Z",
      },
    },
    {
      id: 7,
      attributes: {
        key: "Bạn có muốn tham quan trường SKY-LINE không?",
        vi: "Bạn có muốn tham quan trường SKY-LINE không?",
        en: "Do you want to visit SKY-LINE school?",
        createdAt: "2024-11-16T08:43:31.382Z",
        updatedAt: "2024-11-16T08:43:31.382Z",
      },
    },
    {
      id: 8,
      attributes: {
        key: "Chọn cơ sở tham quan (nếu muốn)",
        vi: "Chọn cơ sở tham quan (nếu muốn)",
        en: "Choose a visit base (if you want)",
        createdAt: "2024-11-16T08:43:42.288Z",
        updatedAt: "2024-11-16T08:43:42.288Z",
      },
    },
    {
      id: 9,
      attributes: {
        key: "Có",
        vi: "Có",
        en: "Yes",
        createdAt: "2024-11-16T08:43:53.725Z",
        updatedAt: "2024-11-16T08:43:53.725Z",
      },
    },
    {
      id: 10,
      attributes: {
        key: "Gửi",
        vi: "Gửi",
        en: "Send",
        createdAt: "2024-11-16T08:44:02.493Z",
        updatedAt: "2024-11-16T08:44:02.493Z",
      },
    },
    {
      id: 11,
      attributes: {
        key: "Hệ thống giáo dục sky-line",
        vi: "Hệ thống giáo dục sky-line",
        en: "Sky-line School System",
        createdAt: "2024-11-16T08:44:11.534Z",
        updatedAt: "2024-11-16T12:18:29.903Z",
      },
    },
    {
      id: 12,
      attributes: {
        key: "Không",
        vi: "Không",
        en: "No",
        createdAt: "2024-11-16T08:44:27.872Z",
        updatedAt: "2024-11-16T08:44:27.872Z",
      },
    },
    {
      id: 13,
      attributes: {
        key: "Nhập email của bạn",
        vi: "Nhập email của bạn",
        en: "Enter your email",
        createdAt: "2024-11-16T08:44:38.890Z",
        updatedAt: "2024-11-16T08:44:38.890Z",
      },
    },
    {
      id: 14,
      attributes: {
        key: "Nhập họ và tên của bạn",
        vi: "Nhập họ và tên của bạn",
        en: "Enter your full name",
        createdAt: "2024-11-16T08:44:54.457Z",
        updatedAt: "2024-11-16T08:44:54.457Z",
      },
    },
    {
      id: 15,
      attributes: {
        key: "Nhập nội dung tin nhắn",
        vi: "Nhập nội dung tin nhắn",
        en: "Enter your message",
        createdAt: "2024-11-16T08:45:05.494Z",
        updatedAt: "2024-11-16T08:45:05.494Z",
      },
    },
    {
      id: 16,
      attributes: {
        key: "Nhập số điện thoại của bạn",
        vi: "Nhập số điện thoại của bạn",
        en: "Enter your phone number",
        createdAt: "2024-11-16T08:45:15.751Z",
        updatedAt: "2024-11-16T08:45:15.751Z",
      },
    },
    {
      id: 17,
      attributes: {
        key: "SKY-LINE Riverside (cơ sở 1)",
        vi: "SKY-LINE Riverside (cơ sở 1)",
        en: "SKY-LINE Riverside (Campus 1)",
        createdAt: "2024-11-16T08:45:25.144Z",
        updatedAt: "2024-11-16T08:45:25.144Z",
      },
    },
    {
      id: 18,
      attributes: {
        key: "SKY-LINE Urban (cơ sở 2)",
        vi: "SKY-LINE Urban (cơ sở 2)",
        en: "SKY-LINE Urban (Campus 2)",
        createdAt: "2024-11-16T08:45:35.050Z",
        updatedAt: "2024-11-16T08:45:35.050Z",
      },
    },
    {
      id: 19,
      attributes: {
        key: "SKY-LINE Urban (cơ sở 3)",
        vi: "SKY-LINE Urban (cơ sở 3)",
        en: "SKY-LINE Urban (Campus 3)",
        createdAt: "2024-11-16T08:45:56.443Z",
        updatedAt: "2024-11-16T08:45:56.443Z",
      },
    },
    {
      id: 20,
      attributes: {
        key: "SKY-LINE Urban (cơ sở 4)",
        vi: "SKY-LINE Urban (cơ sở 4)",
        en: "SKY-LINE Urban (Campus 4)",
        createdAt: "2024-11-16T08:46:18.642Z",
        updatedAt: "2024-11-16T08:46:18.642Z",
      },
    },
    {
      id: 21,
      attributes: {
        key: "SKY-LINE Urban (cơ sở 5)",
        vi: "SKY-LINE Urban (cơ sở 5)",
        en: "SKY-LINE Urban (Campus 5)",
        createdAt: "2024-11-16T08:46:27.173Z",
        updatedAt: "2024-11-16T08:46:27.173Z",
      },
    },
    {
      id: 22,
      attributes: {
        key: "SKY-LINE Urban (cơ sở 6)",
        vi: "SKY-LINE Urban (cơ sở 6)",
        en: "SKY-LINE Urban (Campus 6)",
        createdAt: "2024-11-16T08:46:36.448Z",
        updatedAt: "2024-11-16T08:46:36.448Z",
      },
    },
    {
      id: 23,
      attributes: {
        key: "Thành tựu sky-line",
        vi: "Thành tựu sky-line",
        en: "Sky-line Achievements",
        createdAt: "2024-11-16T08:46:45.739Z",
        updatedAt: "2024-11-16T08:46:45.739Z",
      },
    },
    {
      id: 24,
      attributes: {
        key: "ĐĂNG KÝ TRỰC TUYẾN",
        vi: "ĐĂNG KÝ TRỰC TUYẾN",
        en: "Register Online",
        createdAt: "2024-11-16T08:46:56.730Z",
        updatedAt: "2024-11-16T08:46:56.730Z",
      },
    },
    {
      id: 25,
      attributes: {
        key: "Đăng ký tư vấn",
        vi: "Đăng ký tư vấn",
        en: "Register for advice",
        createdAt: "2024-11-16T08:47:09.284Z",
        updatedAt: "2024-11-16T08:47:09.284Z",
      },
    },
    {
      id: 26,
      attributes: {
        key: "Không tìm thấy trang",
        vi: "Không tìm thấy trang",
        en: "Page Not Found",
        createdAt: "2024-11-16T09:00:42.032Z",
        updatedAt: "2024-11-16T09:00:42.032Z",
      },
    },
    {
      id: 27,
      attributes: {
        key: "Trở về trang chủ",
        vi: "Trở về trang chủ",
        en: "Return Home",
        createdAt: "2024-11-16T09:10:24.689Z",
        updatedAt: "2024-11-16T09:10:24.689Z",
      },
    },
    {
      id: 28,
      attributes: {
        key: "Tìm kiếm",
        vi: "Tìm kiếm",
        en: "Search",
        createdAt: "2024-11-16T10:35:39.778Z",
        updatedAt: "2024-11-16T10:35:39.778Z",
      },
    },
    {
      id: 29,
      attributes: {
        key: "Tìm kiếm bài viết :",
        vi: "Tìm kiếm bài viết :",
        en: "Search for articles :",
        createdAt: "2024-11-16T10:47:28.716Z",
        updatedAt: "2024-11-16T10:47:28.716Z",
      },
    },
    {
      id: 30,
      attributes: {
        key: "Kết quả tìm kiếm cho",
        vi: "Kết quả tìm kiếm cho",
        en: "Search results for",
        createdAt: "2024-11-16T10:48:03.792Z",
        updatedAt: "2024-11-16T10:48:03.792Z",
      },
    },
    {
      id: 31,
      attributes: {
        key: "HỆ THỐNG GIÁO DỤC SKY-LINE",
        vi: "HỆ THỐNG GIÁO DỤC SKY-LINE",
        en: "SKY-LINE EDUCATION SYSTEM",
        createdAt: "2024-11-19T02:09:07.102Z",
        updatedAt: "2024-11-19T02:09:07.102Z",
      },
    },
    {
      id: 32,
      attributes: {
        key: "Chia sẽ",
        vi: "Chia sẽ",
        en: "Share",
        createdAt: "2024-11-19T02:12:19.058Z",
        updatedAt: "2024-11-19T02:12:19.058Z",
      },
    },
    {
      id: 33,
      attributes: {
        key: "Loại hình ",
        vi: "Loại hình",
        en: "Type",
        createdAt: "2024-11-19T04:35:06.584Z",
        updatedAt: "2024-11-19T04:35:06.584Z",
      },
    },
  ],
  meta: { pagination: { page: 1, pageSize: 100, pageCount: 1, total: 33 } },
}

export const getDictionary = async (locale: string) => {
  const dictionaries = tmpDict

  const texts = dictionaries.data.map((e: any) => {
    const {
      attributes: { vi, en, key },
    } = e
    return { vi, en, key }
  })

  const response = texts
    .map((e: any) => ({ [e.key]: e[locale || "vi"] }))
    .reduce((prev: any, curr: any) => {
      return { ...prev, ...curr }
    }, {})

  return response
  // if (!(locale in dictionaries)) {
  //   throw new Error(`No dictionary found for locale: ${locale}`)
  // }
  // return dictionaries[locale]()
}
