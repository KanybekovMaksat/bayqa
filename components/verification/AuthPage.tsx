// import { useState, useEffect } from 'react';
// import { Smartphone, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
// import { PhoneInput } from './PhoneInput';
// import { CodeInput } from './CodeInput';
// import { sendVerificationCode, verifyCode, resendVerificationCode } from '../lib/api';
// import { AuthStep } from '../types/auth';
// import { useAuth } from '../context/AuthContext';

// export function AuthPage() {
//   const { login } = useAuth();
//   const [step, setStep] = useState<AuthStep>('phone');
//   const [phone, setPhone] = useState('');
//   const [code, setCode] = useState(['', '', '', '', '', '']);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [expiresAt, setExpiresAt] = useState<Date | null>(null);
//   const [countdown, setCountdown] = useState(0);
//   const [canResend, setCanResend] = useState(false);

//   useEffect(() => {
//     if (!expiresAt) return;

//     const timer = setInterval(() => {
//       const now = Date.now();
//       const expires = expiresAt.getTime();
//       const remaining = Math.max(0, Math.floor((expires - now) / 1000));
//       setCountdown(remaining);

//       if (remaining === 0) {
//         setError('Код истёк. Пожалуйста, запросите новый код.');
//         setCanResend(true);
//       }
//     }, 1000);

//     return () => clearInterval(timer);
//   }, [expiresAt]);

//   const handleSendCode = async () => {
//     if (!phone || phone.length < 11) {
//       setError('Введите корректный номер телефона');
//       return;
//     }

//     setIsLoading(true);
//     setError('');

//     try {
//       const response = await sendVerificationCode(phone);

//       if (response.error) {
//         setError(response.error);
//         return;
//       }

//       if (response.expires_at) {
//         setExpiresAt(new Date(response.expires_at));
//       }

//       setStep('code');
//       setCanResend(false);

//       setTimeout(() => setCanResend(true), 60000);
//     } catch (err) {
//       setError('Не удалось отправить код. Попробуйте позже.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleVerifyCode = async () => {
//     const fullCode = code.join('');
//     if (fullCode.length !== 6) {
//       setError('Введите полный код из 6 цифр');
//       return;
//     }

//     setIsLoading(true);
//     setError('');

//     try {
//       const response = await verifyCode(phone, fullCode);

//       if (response.error) {
//         setError(response.error);
//         setCode(['', '', '', '', '', '']);
//         return;
//       }

//       if (response.profile) {
//         login(response.profile);
//         setStep('success');
//       }
//     } catch (err) {
//       setError('Не удалось проверить код. Попробуйте позже.');
//       setCode(['', '', '', '', '', '']);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleResendCode = async () => {
//     if (!canResend) return;

//     setIsLoading(true);
//     setError('');
//     setCode(['', '', '', '', '', '']);

//     try {
//       const response = await resendVerificationCode(phone);

//       if (response.error) {
//         if (response.wait_seconds) {
//           setError(`Подождите ${response.wait_seconds} секунд перед повторной отправкой`);
//         } else {
//           setError(response.error);
//         }
//         return;
//       }

//       if (response.expires_at) {
//         setExpiresAt(new Date(response.expires_at));
//       }

//       setCanResend(false);
//       setTimeout(() => setCanResend(true), 60000);
//     } catch (err) {
//       setError('Не удалось отправить код. Попробуйте позже.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleTelegramClick = () => {
//     window.open('https://t.me/bayqamebot', '_blank');
//   };

//   const formatTime = (seconds: number): string => {
//     const mins = Math.floor(seconds / 60);
//     const secs = seconds % 60;
//     return `${mins}:${secs.toString().padStart(2, '0')}`;
//   };

//   if (step === 'success') {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center p-4">
//         <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
//           <div className="mb-6 flex justify-center">
//             <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
//               <CheckCircle2 className="w-10 h-10 text-green-600" />
//             </div>
//           </div>
//           <h1 className="text-3xl font-bold text-gray-900 mb-4">
//             Добро пожаловать!
//           </h1>
//           <p className="text-gray-600 mb-6">
//             Ваш номер телефона успешно подтверждён. Теперь вы можете перейти в личный кабинет для заполнения профиля.
//           </p>
//           <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
//             Перейти в кабинет
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
//       <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full">
//         <div className="mb-8 text-center">
//           <div className="mb-4 flex justify-center">
//             <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
//               <Smartphone className="w-8 h-8 text-blue-600" />
//             </div>
//           </div>
//           <h1 className="text-3xl font-bold text-gray-900 mb-2">bayqa.me</h1>
//           <p className="text-gray-600">
//             {step === 'phone'
//               ? 'Введите номер телефона для входа или регистрации'
//               : 'Введите код из Telegram'}
//           </p>
//         </div>

//         {error && (
//           <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
//             <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
//             <p className="text-red-800 text-sm">{error}</p>
//           </div>
//         )}

//         {step === 'phone' ? (
//           <div className="space-y-6">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">
//                 Номер телефона
//               </label>
//               <PhoneInput
//                 value={phone}
//                 onChange={setPhone}
//                 disabled={isLoading}
//               />
//             </div>

//             <button
//               onClick={handleSendCode}
//               disabled={isLoading || !phone || phone.length < 11}
//               className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 disabled:bg-gray-300 disabled:cursor-not-allowed"
//             >
//               {isLoading ? (
//                 <>
//                   <Loader2 className="w-5 h-5 animate-spin" />
//                   Отправка...
//                 </>
//               ) : (
//                 <>
//                   <Send className="w-5 h-5" />
//                   Получить код в Telegram
//                 </>
//               )}
//             </button>

//             <div className="pt-4 border-t border-gray-200">
//               <p className="text-sm text-gray-600 text-center">
//                 После нажатия кнопки откроется Telegram-бот. Отправьте боту свой контакт, и вы получите код подтверждения.
//               </p>
//             </div>
//           </div>
//         ) : (
//           <div className="space-y-6">
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-4 text-center">
//                 Код подтверждения
//               </label>
//               <CodeInput
//                 value={code}
//                 onChange={setCode}
//                 disabled={isLoading}
//               />
//               {countdown > 0 && (
//                 <p className="text-sm text-gray-500 text-center mt-4">
//                   Код действителен ещё {formatTime(countdown)}
//                 </p>
//               )}
//             </div>

//             <button
//               onClick={handleVerifyCode}
//               disabled={isLoading || code.join('').length !== 6}
//               className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 disabled:bg-gray-300 disabled:cursor-not-allowed"
//             >
//               {isLoading ? (
//                 <>
//                   <Loader2 className="w-5 h-5 animate-spin" />
//                   Проверка...
//                 </>
//               ) : (
//                 <>
//                   <CheckCircle2 className="w-5 h-5" />
//                   Подтвердить
//                 </>
//               )}
//             </button>

//             <div className="flex flex-col gap-3">
//               <button
//                 onClick={handleResendCode}
//                 disabled={!canResend || isLoading}
//                 className="text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors disabled:text-gray-400 disabled:cursor-not-allowed"
//               >
//                 {canResend ? 'Отправить код повторно' : 'Повторная отправка доступна через минуту'}
//               </button>

//               <button
//                 onClick={handleTelegramClick}
//                 className="text-gray-600 text-sm font-medium hover:text-gray-700 transition-colors"
//               >
//                 Открыть Telegram
//               </button>

//               <button
//                 onClick={() => {
//                   setStep('phone');
//                   setCode(['', '', '', '', '', '']);
//                   setError('');
//                   setExpiresAt(null);
//                 }}
//                 className="text-gray-600 text-sm font-medium hover:text-gray-700 transition-colors"
//               >
//                 Изменить номер телефона
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
