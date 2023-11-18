import React, { useState } from "react";
export default function Cook() {
    return (
        <div>
            <div class="relative flex justify-center items-center ">
                <button onclick="showMenu(true)" class="focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 focus:outline-none absolute z-0 top-48 py-2 px-7 bg-gray-800 text-white rounded text-base hover:bg-black">
                    Open
                </button>

                <div id="menu" class=" w-full h-full bg-black bg-opacity-20 top-0  fixed sticky-0">
                    <div class=" absolute px-4 md:px-0 bottom-6 xl:bottom-20 sm:right-6 xl:right-20 flex justify-end items-end ">
                        <div class="blur   sm:w-96 md:w-6/12 lg:w-4/12 xl:w-4/12  relative flex flex-col justify-start items-start bg-white px-4 md:px-8 py-12">
                            <div role="banner">
                                <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0)">
                                        <path d="M50.2352 2.63368L47.8819 8.67043C47.6963 9.14668 47.329 9.52974 46.861 9.73505L39.9409 12.7722C39.4729 12.9777 38.9425 12.9887 38.4662 12.8029L34.4057 11.2195C33.054 10.6924 32.7514 8.92205 33.8432 7.96655C36.7737 5.40192 40.1395 3.23555 43.894 1.58761C45.2061 1.01161 46.5323 0.513987 47.8679 0.0921125C49.407 -0.393887 50.8215 1.12974 50.2352 2.63368Z" fill="#D67F4F" />
                                        <path d="M50.2351 2.63326L47.8823 8.67151C47.695 9.14664 47.3279 9.53101 46.8605 9.73576L39.9397 12.7723C39.4722 12.9789 38.9429 12.9887 38.4659 12.8033L35.7539 11.7448L40.3317 9.73595C40.7992 9.5312 41.1682 9.14682 41.3536 8.6717L43.7063 2.63345C43.8415 2.28957 43.8706 1.94382 43.8164 1.6232C43.8415 1.61157 43.8685 1.60014 43.8936 1.58851C45.2052 1.01289 46.5321 0.51451 47.867 0.0933851C49.4063 -0.393552 50.8203 1.13064 50.2351 2.63326Z" fill="#C76D3D" />
                                        <path
                                            d="M82.6555 56.9072C82.6555 78.4966 65.1537 96.0004 43.5623 96.0006C21.9181 96.0008 4.48151 78.5753 4.46876 56.9311C4.45938 41.0003 13.9771 27.2929 27.6378 21.1932C28.3638 20.869 29.2156 21.0332 29.7777 21.5954L34.0848 25.9022C34.4461 26.2635 34.9364 26.4666 35.4475 26.4666H43.0049C43.516 26.4666 44.0061 26.6697 44.3676 27.031L50.7949 33.4583C51.1562 33.8198 51.6466 34.0227 52.1577 34.0227L59.4831 34.0142C60.1624 34.0135 60.7921 34.3705 61.1402 34.954L63.0287 38.1192C63.3529 38.6625 63.9235 39.0122 64.5548 39.0546L77.6819 39.9338C78.3938 39.9814 79.0244 40.4174 79.3139 41.0695C81.4617 45.9096 82.6555 51.2687 82.6555 56.9072Z"
                                            fill="#D67F4F"
                                        />
                                        <path
                                            d="M82.6567 56.9065C82.6567 78.496 65.1564 96 43.5652 96C42.4642 96 41.3748 95.9556 40.2969 95.8649C60.3622 94.2094 76.1298 77.3989 76.1298 56.9067C76.1298 51.2684 74.9341 45.9083 72.7863 41.0697C72.4985 40.4168 71.8668 39.9803 71.156 39.9338L58.0289 39.055C57.3972 39.0124 56.8256 38.6629 56.5031 38.1182L54.614 34.9544C54.2953 34.4192 53.7389 34.0755 53.1247 34.0214L59.4854 34.0137C60.1634 34.0137 60.7931 34.371 61.1428 34.9544L63.0299 38.1182C63.3545 38.6629 63.9262 39.0126 64.5558 39.055L77.6829 39.9338C78.3956 39.9801 79.0254 40.4166 79.3151 41.0697C81.4629 45.9081 82.6567 51.2684 82.6567 56.9065Z"
                                            fill="#C76D3D"
                                        />
                                        <path d="M79.6739 11.7333L74.2551 17.152C73.8938 17.5133 73.4035 17.7164 72.8924 17.7164H65.2791C64.768 17.7164 64.2779 17.5133 63.9164 17.152L58.2871 11.5227C57.5346 10.7703 57.5345 9.55021 58.2869 8.79759L63.9923 3.09065C64.4648 2.61815 65.1492 2.42146 65.7993 2.57653C70.7888 3.76659 75.4058 5.91496 79.4481 8.81446C80.4093 9.50371 80.51 10.8972 79.6739 11.7333Z" fill="#D67F4F" />
                                        <path d="M79.673 11.7329L74.2548 17.153C73.8916 17.5141 73.403 17.717 72.8911 17.717H66.3624C66.8743 17.717 67.365 17.5141 67.7261 17.153L73.1443 11.7329C73.9807 10.8965 73.8802 9.5039 72.9183 8.81427C69.992 6.71465 66.7623 5.00896 63.3086 3.77484L63.9924 3.09102C64.4638 2.61777 65.1495 2.42071 65.7984 2.57727C70.7878 3.76715 75.4042 5.91515 79.4471 8.81446C80.409 9.5039 80.5093 10.8965 79.673 11.7329Z" fill="#C76D3D" />
                                        <path d="M87.8704 35.0432L79.9895 27.6289C79.5286 27.1952 79.31 26.5629 79.4045 25.9372L79.895 22.6935C80.027 21.8209 80.7348 21.1494 81.613 21.0635L88.9555 20.3462C89.9703 20.247 90.8884 20.9552 91.0478 21.9622C91.6737 25.9164 91.6947 29.9593 91.0953 33.9401C90.8648 35.471 88.9981 36.104 87.8704 35.0432Z" fill="#D67F4F" />
                                        <path d="M91.0973 33.9403C90.8656 35.4722 88.9996 36.1037 87.8716 35.0432L85.8396 33.133C86.3206 29.4147 86.2626 25.65 85.6793 21.9627C85.6002 21.4585 85.3296 21.0297 84.9531 20.7381L88.9574 20.346C89.9714 20.2476 90.8909 20.9563 91.0493 21.9627C91.6748 25.9165 91.696 29.9593 91.0973 33.9403Z" fill="#C76D3D" />
                                        <path d="M56.2879 24.6387L55.5352 24.8763C54.5203 25.1967 53.4378 24.6334 53.1174 23.6185L52.043 20.215C51.7226 19.2001 52.2858 18.1176 53.3008 17.7972L54.0534 17.5596C55.0684 17.2392 56.1508 17.8024 56.4712 18.8174L57.5456 22.2209C57.8659 23.2358 57.3028 24.3183 56.2879 24.6387Z" fill="#9D552E" />
                                        <path d="M26.2428 53.5259L21.9438 53.0905C21.1552 53.0106 20.4956 52.4571 20.2798 51.6944L18.7453 46.2692C18.4603 45.2618 19.0299 44.2109 20.0293 43.8994L25.0574 42.3327C25.8011 42.1009 26.6109 42.3385 27.1117 42.9351L30.2765 46.7061C30.8212 47.3551 30.8793 48.2834 30.4199 48.9951L28.0604 52.6516C27.6669 53.2613 26.9647 53.599 26.2428 53.5259Z" fill="#9D552E" />
                                        <path d="M30.42 48.9949L28.0596 52.6516C27.6675 53.2619 26.9644 53.5981 26.242 53.5264L22.261 53.1228C22.4271 52.9934 22.5739 52.8349 22.6917 52.6514L25.0502 48.9947C25.51 48.2821 25.452 47.3549 24.9073 46.7059L22.0273 43.2773L25.0579 42.3327C25.8015 42.1009 26.611 42.3385 27.1112 42.9353L30.2772 46.7057C30.8218 47.3551 30.8798 48.2822 30.42 48.9949Z" fill="#8E4D29" />
                                        <path d="M37.5464 70.5843L37.111 74.8833C37.0311 75.672 36.4776 76.3316 35.7149 76.5474L30.2898 78.0819C29.2823 78.3669 28.2314 77.7973 27.9199 76.7979L26.3532 71.7697C26.1214 71.0261 26.359 70.2163 26.9556 69.7155L30.7266 66.5507C31.3756 66.006 32.3039 65.9479 33.0156 66.4072L36.6721 68.7667C37.2818 69.1603 37.6195 69.8623 37.5464 70.5843Z" fill="#9D552E" />
                                        <path d="M37.547 70.5848L37.1105 74.8845C37.0313 75.6726 36.4769 76.3313 35.7158 76.5476L30.29 78.0814C29.4207 78.3287 28.5187 77.9385 28.0898 77.1851L30.346 76.5478C31.109 76.3314 31.6615 75.6727 31.7407 74.8847L32.1772 70.5849C32.2505 69.8625 31.9126 69.1614 31.3021 68.7673L29.4845 67.5949L30.7265 66.5518C31.3754 66.0071 32.3026 65.9492 33.0155 66.4069L36.6719 68.7673C37.2822 69.1611 37.6203 69.8623 37.547 70.5848Z" fill="#8E4D29" />
                                        <path d="M63.4414 55.0509L62.9336 60.0647C62.8405 60.9843 62.1949 61.7538 61.3054 62.0053L54.9782 63.7948C53.8033 64.127 52.5776 63.4629 52.2144 62.2972L50.3872 56.4332C50.1171 55.566 50.394 54.6214 51.0898 54.0375L55.4876 50.3466C56.2446 49.7113 57.327 49.6434 58.1573 50.1793L62.4216 52.931C63.1328 53.39 63.5267 54.2089 63.4414 55.0509Z" fill="#9D552E" />
                                        <path d="M63.4408 55.0511L62.9328 60.0655C62.8402 60.985 62.195 61.7537 61.3046 62.0066L54.9787 63.7952C54.0515 64.0579 53.0915 63.6986 52.5508 62.9627L55.9368 62.0066C56.8254 61.7535 57.4706 60.9848 57.5651 60.0655L58.0712 55.0511C58.1582 54.2091 57.764 53.3899 57.0513 52.9322L54.4282 51.2382L55.4887 50.3477C56.244 49.7123 57.3275 49.6446 58.1582 50.1797L62.4212 52.9322C63.1316 53.3899 63.5257 54.2089 63.4408 55.0511Z" fill="#8E4D29" />
                                        <path d="M69.6184 80.1822L72.3504 83.53C72.8516 84.144 72.9266 85.002 72.54 85.6937L69.7888 90.6149C69.2779 91.5287 68.1321 91.8692 67.2051 91.3827L62.5418 88.935C61.8521 88.5732 61.4473 87.8324 61.5152 87.0565L61.9438 82.1522C62.0175 81.3081 62.6327 80.6108 63.4611 80.4321L67.7151 79.5151C68.4242 79.3622 69.1594 79.6199 69.6184 80.1822Z" fill="#9D552E" />
                                        <path d="M72.5391 85.6929L69.7885 90.6146C69.2785 91.5283 68.1312 91.8682 67.204 91.3815L64.72 90.0776L67.1712 85.6929C67.5574 85.0014 67.4823 84.1438 66.9799 83.5296L64.3047 80.2498L67.714 79.5157C68.4248 79.3612 69.1589 79.62 69.6186 80.1821L72.3499 83.5296C72.8521 84.1438 72.9275 85.0014 72.5391 85.6929Z" fill="#8E4D29" />
                                        <path d="M57.7226 74.1209H55.6635C54.8634 74.1209 54.2148 73.4723 54.2148 72.6723C54.2148 71.8722 54.8634 71.2236 55.6635 71.2236H57.7226C58.5227 71.2236 59.1712 71.8722 59.1712 72.6723C59.1712 73.4723 58.5227 74.1209 57.7226 74.1209Z" fill="#C76D3D" />
                                        <path d="M42.2689 83.5101C41.4689 83.5101 40.8203 82.8615 40.8203 82.0615V80.0023C40.8203 79.2021 41.4689 78.5537 42.2689 78.5537C43.069 78.5537 43.7176 79.2023 43.7176 80.0023V82.0615C43.7176 82.8617 43.069 83.5101 42.2689 83.5101Z" fill="#8E4D29" />
                                        <path d="M35.5742 40.9051H33.515C32.715 40.9051 32.0664 40.2565 32.0664 39.4564C32.0664 38.6562 32.715 38.0078 33.515 38.0078H35.5742C36.3742 38.0078 37.0228 38.6564 37.0228 39.4564C37.0228 40.2565 36.3742 40.9051 35.5742 40.9051Z" fill="#C76D3D" />
                                        <path d="M25.5385 34.2735C25.1678 34.2735 24.7971 34.132 24.5142 33.8492C23.9485 33.2835 23.9483 32.3663 24.514 31.8004L25.97 30.3443C26.5358 29.7784 27.4529 29.7786 28.0188 30.3441C28.5845 30.9098 28.5846 31.827 28.0188 32.3929L26.5628 33.849C26.2799 34.132 25.9092 34.2735 25.5385 34.2735Z" fill="#9D552E" />
                                        <path d="M70.9841 58.2986H70.9643C70.1642 58.2986 69.5156 57.6501 69.5156 56.85C69.5156 56.0499 70.1642 55.4014 70.9643 55.4014H70.9841C71.7842 55.4014 72.4328 56.0499 72.4328 56.85C72.4328 57.6501 71.7842 58.2986 70.9841 58.2986Z" fill="#C76D3D" />
                                        <path d="M32.8318 57.4881H32.8119C32.0118 57.4881 31.3633 56.8395 31.3633 56.0394C31.3633 55.2394 32.0118 54.5908 32.8119 54.5908H32.8318C33.6318 54.5908 34.2804 55.2394 34.2804 56.0394C34.2804 56.8395 33.6318 57.4881 32.8318 57.4881Z" fill="#9D552E" />
                                        <path d="M64.3162 73.575H64.2963C63.4962 73.575 62.8477 72.9264 62.8477 72.1264C62.8477 71.3263 63.4962 70.6777 64.2963 70.6777H64.3162C65.1162 70.6777 65.7648 71.3263 65.7648 72.1264C65.7648 72.9264 65.1162 73.575 64.3162 73.575Z" fill="#C76D3D" />
                                        <path d="M18.6794 68.2498H18.6596C17.8595 68.2498 17.2109 67.6012 17.2109 66.8012C17.2109 66.0011 17.8595 65.3525 18.6596 65.3525H18.6794C19.4795 65.3525 20.1281 66.0011 20.1281 66.8012C20.1281 67.6012 19.4795 68.2498 18.6794 68.2498Z" fill="#C76D3D" />
                                        <path d="M46.906 47.8084H46.8861C46.0861 47.8084 45.4375 47.1598 45.4375 46.3598C45.4375 45.5597 46.0861 44.9111 46.8861 44.9111H46.906C47.7061 44.9111 48.3546 45.5597 48.3546 46.3598C48.3546 47.1598 47.7062 47.8084 46.906 47.8084Z" fill="#9D552E" />
                                        <path d="M14.7105 66.4558H14.6908C13.8907 66.4558 13.2422 65.8073 13.2422 65.0072C13.2422 64.2072 13.8907 63.5586 14.6908 63.5586H14.7105C15.5106 63.5586 16.1591 64.2072 16.1591 65.0072C16.1591 65.8073 15.5106 66.4558 14.7105 66.4558Z" fill="#C76D3D" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0">
                                            <rect width="96" height="96" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <h1 role="main" class="text-2xl font-semibold leading-normal text-center text-gray-800 mt-8">
                                    Allow Cookies
                                </h1>
                            </div>
                            <div class="mt">
                                <div>
                                    <p class="mt-3  text-base leading-7  text-gray-600">We use cookies, including thrid-party cookies, for functional reasons, for satistical analysis, to personalise your experience.</p>
                                </div>

                                <div class="flex justify-center lg:flex-row flex-col flex-col-reverse items-center w-full lg:space-x-4 mt-9  ">
                                    <button onclick="showMenu(true)" class="w-60  sm:w-full mt-4 lg:mt-0  text-base border border-gray-800 leading-4 text-center text-gray-800 py-4 px-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800  hover:bg-gray-300 ">
                                        Exit
                                    </button>
                                    <button class="w-60  sm:w-full   text-base leading-4 border border-gray-800 text-center text-white py-4 px-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 bg-gray-800 hover:bg-black ">Accept</button>
                                </div>
                            </div>
                            <button onclick="showMenu(true)" class=" absolute top-5 md:top-8 right-5 md:right-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800" aria-label="close">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 6L6 18" stroke="#1F2937" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M6 6L18 18" stroke="#1F2937" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <style>
                {`
            .blur {
                background: rgba(255, 255, 255, 0.8);
                backdrop-filter: blur(20px);
            }
            `}
            </style>
        </div>
    );
}
