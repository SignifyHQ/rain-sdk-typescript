// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as UserAPI from './user';
import {
  IssuingUser,
  User,
  UserCreateParams,
  UserInitiateParams,
  UserReapplyParams,
  UserRetrieveResponse,
  UserUpdateParams,
  UserUploadDocumentParams,
} from './user';
import * as CompanyAPI from './company/company';
import {
  Company,
  CompanyCreateParams,
  CompanyReapplyParams,
  CompanyRetrieveResponse,
  CompanyUpdateParams,
  CompanyUploadDocumentParams,
  IssuingApplication,
  IssuingApplicationPerson,
  IssuingCompany,
  PhysicalAddress,
} from './company/company';

export class Applications extends APIResource {
  company: CompanyAPI.Company = new CompanyAPI.Company(this._client);
  user: UserAPI.User = new UserAPI.User(this._client);
}

Applications.Company = Company;
Applications.User = User;

export declare namespace Applications {
  export {
    Company as Company,
    type IssuingApplication as IssuingApplication,
    type IssuingApplicationPerson as IssuingApplicationPerson,
    type IssuingCompany as IssuingCompany,
    type PhysicalAddress as PhysicalAddress,
    type CompanyRetrieveResponse as CompanyRetrieveResponse,
    type CompanyCreateParams as CompanyCreateParams,
    type CompanyUpdateParams as CompanyUpdateParams,
    type CompanyReapplyParams as CompanyReapplyParams,
    type CompanyUploadDocumentParams as CompanyUploadDocumentParams,
  };

  export {
    User as User,
    type IssuingUser as IssuingUser,
    type UserRetrieveResponse as UserRetrieveResponse,
    type UserCreateParams as UserCreateParams,
    type UserUpdateParams as UserUpdateParams,
    type UserInitiateParams as UserInitiateParams,
    type UserReapplyParams as UserReapplyParams,
    type UserUploadDocumentParams as UserUploadDocumentParams,
  };
}
