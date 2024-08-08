import { useLoginVeiwModel } from "./veiwModel";
import { AgentInfo } from "./agentInfo";
import { OtpVerification } from "./otpVerification";
import { PhoneVerification } from "./phoneVerification";
import { UserInfo } from "./userInfo";
import { useAuthContext } from "../../context/auth/useAuthContext";
import { AuthLayout } from "../../components/layouts/authLayout";
import { UserInfoView } from "./userInfo/view";
import { useUserInfoViewModel } from "./userInfo/viewModel";
import { FormikTextField } from "../../components/elements/textField/formikTextField";
import * as yup from "yup";
import { PhoneVerificationView } from "./phoneVerification/view";
import { usePhoneVerificationViewModel } from "./phoneVerification/viewModel";
import { useMutation } from "@tanstack/react-query";
import { axiosPost, axiosGet } from "../../configs/httpService/httpService";
import {
  CREATE_OTP,
  VALIDATE_OTP,
  COUNTRIES_WOP,
  PROVINCES_WOP,
  CHECK_AGENCY_CODE,
  INSURANCE_BRANCH,
} from "../../constants/endPoints";
import { OtpVerificationView } from "./otpVerification/view";
import { useOtpVerificationViewModel } from "./otpVerification/viewModel";
import { useFormikContext } from "formik";
import { InputOtp } from "../../components/elements/inputOtp/inputOtp";
import { OtpCountdownTimer } from "../../components/elements/counter/otpCountdownTimer";
import { AgentInfoView } from "./agentInfo/view";
import { useAgentInfoViewModel } from "./agentInfo/viewModel";
import { FormikAutoComplete } from "../../components/elements/autoComplete/formikAutoComplete";
import { FormikRadio } from "../../components/elements/radio/formikRadio";
import { useDebounce } from "../../hook/useDebounce";
import { showError } from "../../hook/useToust";
import { Dashboard } from "../dashboard";
import { PHONE_REGEX } from "../../constants/constant";
import type { InitialValuesType, UseUserInfoType } from "../../types/userInfo";
import type {
  BodyOtp,
  InitialValuesOtp,
  UseOtpVerification,
} from "../../../types/otpVerification";
import {
  InitialValuesPhoneVerification,
  UsePhoneVerificationType,
} from "../../types/phoneVerification";

export {
  yup,
  useMutation,
  useFormikContext,
  axiosPost,
  axiosGet,
  useLoginVeiwModel,
  AgentInfo,
  InputOtp,
  AgentInfoView,
  useAgentInfoViewModel,
  OtpVerificationView,
  OtpCountdownTimer,
  useOtpVerificationViewModel,
  OtpVerification,
  PhoneVerification,
  UserInfo,
  PhoneVerificationView,
  usePhoneVerificationViewModel,
  useAuthContext,
  AuthLayout,
  UserInfoView,
  useUserInfoViewModel,
  FormikTextField,
  FormikAutoComplete,
  FormikRadio,
  Dashboard,
  COUNTRIES_WOP,
  PROVINCES_WOP,
  CREATE_OTP,
  VALIDATE_OTP,
  CHECK_AGENCY_CODE,
  INSURANCE_BRANCH,
  PHONE_REGEX,
  useDebounce,
  showError,
};

export type {
  InitialValuesType,
  UseUserInfoType,
  InitialValuesPhoneVerification,
  UsePhoneVerificationType,
  BodyOtp,
  InitialValuesOtp,
  UseOtpVerification,
};
