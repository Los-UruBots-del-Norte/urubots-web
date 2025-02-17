import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../public/images/logo/logo.svg';
import logo2 from '../../../public/images/logo/logo-2.svg';

export const Footer = ({navigation}: any) => {
    return (
        <>
            <footer
                className='wow fadeInUp relative z-10 bg-primary dark:dark:bg-gray-900 bg-opacity-5 pt-8 md:pt-16 lg:pt-24'
                data-wow-delay='.1s'
            >
                <div className='w-full'>
                    <div className='-mx-4 flex flex-wrap'>
                        <div className='w-full px-4 md:w-1/2 lg:w-6/12 xl:w-5/12'>
                            <div className='ml-6 mb-12 max-w-[360px] lg:mb-16'>
                                <Link href='/' className='mb-8 inline-block'>
                                    <Image
                                        src={logo}
                                        alt='logo'
                                        className='dark:hidden'
                                        width={140}
                                        height={30}
                                    />
                                    <Image
                                        src={logo2}
                                        alt='logo'
                                        className='hidden dark:block'
                                        width={140}
                                        height={30}
                                    />
                                </Link>
                                <div className='flex items-center'>
                                    <a
                                        href='/'
                                        aria-label='social-link'
                                        className='mr-6 text-primary hover:text-blue-900 dark:text-white dark:hover:text-blue-500'
                                    >
                                        <svg
                                            width='9'
                                            height='18'
                                            viewBox='0 0 9 18'
                                            className='fill-current'
                                        >
                                            <path
                                                d='M8.13643 7H6.78036H6.29605V6.43548V4.68548V4.12097H6.78036H7.79741C8.06378 4.12097 8.28172 3.89516 8.28172 3.55645V0.564516C8.28172 0.254032 8.088 0 7.79741 0H6.02968C4.11665 0 2.78479 1.58064 2.78479 3.92339V6.37903V6.94355H2.30048H0.65382C0.314802 6.94355 0 7.25403 0 7.70564V9.7379C0 10.1331 0.266371 10.5 0.65382 10.5H2.25205H2.73636V11.0645V16.7379C2.73636 17.1331 3.00273 17.5 3.39018 17.5H5.66644C5.81174 17.5 5.93281 17.4153 6.02968 17.3024C6.12654 17.1895 6.19919 16.9919 6.19919 16.8226V11.0927V10.5282H6.70771H7.79741C8.11222 10.5282 8.35437 10.3024 8.4028 9.96371V9.93548V9.90726L8.74182 7.95968C8.76604 7.7621 8.74182 7.53629 8.59653 7.31048C8.54809 7.16935 8.33016 7.02823 8.13643 7Z'/>
                                        </svg>
                                    </a>
                                    <a
                                        href='/'
                                        aria-label='social-link'
                                        className='mr-6 text-primary hover:text-blue-900 dark:text-white dark:hover:text-blue-500'
                                    >
                                        <svg
                                            width='19'
                                            height='14'
                                            viewBox='0 0 19 14'
                                            className='fill-current'
                                        >
                                            <path
                                                d='M16.3024 2.26027L17.375 1.0274C17.6855 0.693493 17.7702 0.436644 17.7984 0.308219C16.9516 0.770548 16.1613 0.924658 15.6532 0.924658H15.4556L15.3427 0.821918C14.6653 0.282534 13.8185 0 12.9153 0C10.9395 0 9.3871 1.48973 9.3871 3.21062C9.3871 3.31336 9.3871 3.46747 9.41532 3.57021L9.5 4.0839L8.90726 4.05822C5.29435 3.95548 2.33065 1.13014 1.85081 0.642123C1.06048 1.92637 1.5121 3.15925 1.99194 3.92979L2.95161 5.36815L1.42742 4.5976C1.45565 5.67637 1.90726 6.52397 2.78226 7.14041L3.54435 7.65411L2.78226 7.93665C3.2621 9.24658 4.33468 9.78596 5.125 9.99144L6.16935 10.2483L5.18145 10.8647C3.60081 11.8921 1.625 11.8151 0.75 11.738C2.52823 12.8682 4.64516 13.125 6.1129 13.125C7.21371 13.125 8.03226 13.0223 8.22984 12.9452C16.1331 11.25 16.5 4.82877 16.5 3.54452V3.36473L16.6694 3.26199C17.629 2.44007 18.0242 2.00342 18.25 1.74658C18.1653 1.77226 18.0524 1.82363 17.9395 1.84932L16.3024 2.26027Z'/>
                                        </svg>
                                    </a>
                                    <a
                                        href='/'
                                        aria-label='social-link'
                                        className='mr-6 text-primary hover:text-blue-900 dark:text-white dark:hover:text-blue-500'
                                    >
                                        <svg
                                            width='18'
                                            height='14'
                                            viewBox='0 0 18 14'
                                            className='fill-current'
                                        >
                                            <path
                                                d='M17.5058 2.07119C17.3068 1.2488 16.7099 0.609173 15.9423 0.395963C14.5778 7.26191e-08 9.0627 0 9.0627 0C9.0627 0 3.54766 7.26191e-08 2.18311 0.395963C1.41555 0.609173 0.818561 1.2488 0.619565 2.07119C0.25 3.56366 0.25 6.60953 0.25 6.60953C0.25 6.60953 0.25 9.68585 0.619565 11.1479C0.818561 11.9703 1.41555 12.6099 2.18311 12.8231C3.54766 13.2191 9.0627 13.2191 9.0627 13.2191C9.0627 13.2191 14.5778 13.2191 15.9423 12.8231C16.7099 12.6099 17.3068 11.9703 17.5058 11.1479C17.8754 9.68585 17.8754 6.60953 17.8754 6.60953C17.8754 6.60953 17.8754 3.56366 17.5058 2.07119ZM7.30016 9.44218V3.77687L11.8771 6.60953L7.30016 9.44218Z'/>
                                        </svg>
                                    </a>
                                    <a
                                        href='/'
                                        aria-label='social-link'
                                        className='mr-6 text-primary hover:text-blue-900 dark:text-white dark:hover:text-blue-500'
                                    >
                                        <svg
                                            width='17'
                                            height='16'
                                            viewBox='0 0 17 16'
                                            className='fill-current'
                                        >
                                            <path
                                                d='M15.2196 0H1.99991C1.37516 0 0.875366 0.497491 0.875366 1.11936V14.3029C0.875366 14.8999 1.37516 15.4222 1.99991 15.4222H15.1696C15.7943 15.4222 16.2941 14.9247 16.2941 14.3029V1.09448C16.3441 0.497491 15.8443 0 15.2196 0ZM5.44852 13.1089H3.17444V5.7709H5.44852V13.1089ZM4.29899 4.75104C3.54929 4.75104 2.97452 4.15405 2.97452 3.43269C2.97452 2.71133 3.57428 2.11434 4.29899 2.11434C5.02369 2.11434 5.62345 2.71133 5.62345 3.43269C5.62345 4.15405 5.07367 4.75104 4.29899 4.75104ZM14.07 13.1089H11.796V9.55183C11.796 8.7061 11.771 7.58674 10.5964 7.58674C9.39693 7.58674 9.222 8.53198 9.222 9.47721V13.1089H6.94792V5.7709H9.17202V6.79076H9.19701C9.52188 6.19377 10.2466 5.59678 11.3711 5.59678C13.6952 5.59678 14.12 7.08925 14.12 9.12897V13.1089H14.07Z'/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className='w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12'>
                            <div className='ml-6 mb-12 lg:mb-16'>
                                <ul>
                                    {navigation.map((menuItem: {
                                        id: number;
                                        title: string;
                                        path: string;
                                    }) => (
                                        <li key={menuItem.id} className='group relative'>
                                            {menuItem.path ? (
                                                <Link
                                                    href={menuItem.path}
                                                    className={`flex py-2 text-base text-dark group-hover:opacity-70 dark:text-white lg:mr-0 lg:inline-flex lg:py-3 lg:px-0`}
                                                >
                                                    {menuItem.title}
                                                </Link>
                                            ) : (
                                                <></>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/*<div className='w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12'>*/}
                        {/*    <div className='ml-6 mb-12 lg:mb-16'>*/}
                        {/*        <h2 className='mb-5 text-xl font-bold text-black dark:text-white'>*/}
                        {/*            {*/}
                        {/*                navigation.find(*/}
                        {/*                    (item: { submenu: [] }) =>*/}
                        {/*                        item.submenu && item.submenu.length > 0*/}
                        {/*                ).title*/}
                        {/*            }*/}
                        {/*        </h2>*/}
                        {/*        <ul>*/}
                        {/*            {navigation*/}
                        {/*                .find(*/}
                        {/*                    (item: { submenu: [] }) =>*/}
                        {/*                        item.submenu && item.submenu.length > 0*/}
                        {/*                )*/}
                        {/*                .submenu.map(*/}
                        {/*                    (menuItem: {*/}
                        {/*                        id: number;*/}
                        {/*                        title: string;*/}
                        {/*                        path: string;*/}
                        {/*                        newTab: boolean;*/}
                        {/*                    }) => (*/}
                        {/*                        <li key={menuItem.id} className='group relative'>*/}
                        {/*                            {menuItem.path ? (*/}
                        {/*                                <Link*/}
                        {/*                                    href={menuItem.path}*/}
                        {/*                                    className={`flex py-2 text-base text-dark group-hover:opacity-70 dark:text-white lg:mr-0 lg:inline-flex lg:py-3 lg:px-0`}*/}
                        {/*                                >*/}
                        {/*                                    {menuItem.title}*/}
                        {/*                                </Link>*/}
                        {/*                            ) : (*/}
                        {/*                                <></>*/}
                        {/*                            )}*/}
                        {/*                        </li>*/}
                        {/*                    )*/}
                        {/*                )}*/}
                        {/*        </ul>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        <div className='w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12'>
                            <div className='ml-6 mb-12 lg:mb-16'>
                                <h2 className='mb-5 text-xl font-bold text-black dark:text-white'>
                                    {navigation.at(5).title}
                                </h2>
                                <ul>
                                    {navigation.at(5).submenu.map(
                                        (menuItem: {
                                            id: number;
                                            title: string;
                                            path: string;
                                            newTab: boolean;
                                        }) => (
                                            <li key={menuItem.id} className='group relative'>
                                                {menuItem.path ? (
                                                    <Link
                                                        href={menuItem.path}
                                                        className={`flex py-2 text-base text-dark group-hover:opacity-70 dark:text-white lg:mr-0 lg:inline-flex lg:py-3 lg:px-0`}
                                                    >
                                                        {menuItem.title}
                                                    </Link>
                                                ) : (
                                                    <></>
                                                )}
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='bg-primary/10 py-8'>
                    <div className='w-full'>
                        <p className='text-center text-base text-body-color dark:text-white'>
                            URUBOTS &#10084; &#65039;- {new Date().getFullYear()}
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
};
