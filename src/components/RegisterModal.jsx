import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FaFacebook, FaGoogle, FaTwitter } from 'react-icons/fa';

const RegisterModal = ({ isOpen, onClose }) => {
  const formik = useFormik({
    initialValues: {
      fullName: '',
      username: '',
      email: '',
      whatsapp: '',
      password: '',
      confirmPassword: '',
      terms: false,
      captcha: false,
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .max(50, 'Nama tidak boleh lebih dari 50 karakter')
        .required('Nama harus diisi'),
      username: Yup.string()
        .max(20, 'Username tidak boleh lebih dari 20 karakter')
        .required('Username harus diisi'),
      email: Yup.string()
        .email('Email tidak valid')
        .required('Email harus diisi'),
      whatsapp: Yup.string()
        .matches(/^[0-9]+$/, 'Nomor WhatsApp harus berupa angka')
        .required('Nomor WhatsApp harus diisi'),
      password: Yup.string()
        .min(6, 'Password minimal 6 karakter')
        .required('Password harus diisi'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Password harus sama')
        .required('Konfirmasi password harus diisi'),
      terms: Yup.boolean()
        .oneOf([true], 'Kamu harus menyetujui syarat dan ketentuan'),
      captcha: Yup.boolean()
        .oneOf([true], 'Harap verifikasi captcha'),
    }),
    onSubmit: (values) => {
      console.log('Form data:', values);
      alert('Registrasi Berhasil!');
    },
  });

  if (!isOpen) return null; // Prevent rendering if modal is not open

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50">
      <div className="absolute inset-0 bg-gray-700 opacity-75"></div>
      <div className="relative bg-gray-50 p-6 rounded-lg shadow-lg w-full max-w-xl">
        <button onClick={onClose} className="absolute top-2 right-4 text-xl text-gray-600 hover:text-black">
          &times;
        </button>
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Registrasi</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Nama Lengkap */}
            <div className="mb-4">
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                Nama Lengkap
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.fullName}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
              />
              {formik.touched.fullName && formik.errors.fullName ? (
                <div className="text-red-600 text-sm mt-1">{formik.errors.fullName}</div>
              ) : null}
            </div>

            {/* Username */}
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.username}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
              />
              {formik.touched.username && formik.errors.username ? (
                <div className="text-red-600 text-sm mt-1">{formik.errors.username}</div>
              ) : null}
            </div>

            {/* Email */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-600 text-sm mt-1">{formik.errors.email}</div>
              ) : null}
            </div>

            {/* Nomor WhatsApp */}
            <div className="mb-4">
              <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700">
                Nomor WhatsApp
              </label>
              <input
                id="whatsapp"
                name="whatsapp"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.whatsapp}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
              />
              {formik.touched.whatsapp && formik.errors.whatsapp ? (
                <div className="text-orange-600 text-sm mt-1">{formik.errors.whatsapp}</div>
              ) : null}
            </div>

            {/* Password */}
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="text-red-600 text-sm mt-1">{formik.errors.password}</div>
              ) : null}
            </div>

            {/* Konfirmasi Password */}
            <div className="mb-4">
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                Konfirmasi Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.confirmPassword}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
              />
              {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                <div className="text-red-600 text-sm mt-1">{formik.errors.confirmPassword}</div>
              ) : null}
            </div>
          </div>

          {/* Syarat & Ketentuan */}
          <div className="mb-4">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="terms"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.terms}
                className="form-checkbox h-4 w-4 text-orange-600 transition duration-150 ease-in-out"
              />
              <span className="ml-2 text-sm text-gray-600">
                Saya Setuju Dengan
                <a href="/syaratdanketentuan" className='text-orange-600 hover:underline'> syarat dan ketentuan</a> dan <a href="/kebijakanpribadi" className='text-orange-600 hover:underline'>kebijakan pribadi.</a> 
              </span>
            </label>
            {formik.touched.terms && formik.errors.terms ? (
              <div className="text-red-600 text-sm mt-1">{formik.errors.terms}</div>
            ) : null}
          </div>

          {/* reCAPTCHA (Simulasi) */}
          <div className="mb-4">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                name="captcha"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                checked={formik.values.captcha}
                className="form-checkbox h-4 w-4 text-orange-600 transition duration-150 ease-in-out"
              />
              <span className="ml-2 text-sm text-gray-600">I'm not a robot</span>
            </label>
            {formik.touched.captcha && formik.errors.captcha ? (
              <div className="text-red-600 text-sm mt-1">{formik.errors.captcha}</div>
            ) : null}
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
          >
            Daftar
          </button>
        </form>

        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">Atau daftar dengan:</p>
          <div className="flex justify-center space-x-3 mt-2">
            <button className="text-blue-600">
              <FaFacebook size={24} />
            </button>
            <button className="text-red-600">
              <FaGoogle size={24} />
            </button>
            <button className="text-blue-400">
              <FaTwitter size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;
