// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CompanyAPI from './company/company';
import { APIPromise } from '../../core/api-promise';
import { type Uploadable } from '../../core/uploads';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { multipartFormRequestOptions } from '../../internal/uploads';
import { path } from '../../internal/utils/path';

export class User extends APIResource {
  /**
   * Submits an application to create a consumer account for a user. The application
   * can be submitted using a Sumsub share token, Persona share token, or directly
   * via API. The user must provide details about their wallet, occupation, salary,
   * and other account-related information.
   *
   * @example
   * ```ts
   * const issuingUser = await client.applications.user.create({
   *   accountPurpose: 'accountPurpose',
   *   annualSalary: 'annualSalary',
   *   expectedMonthlyVolume: 'expectedMonthlyVolume',
   *   ipAddress: 'ipAddress',
   *   isTermsOfServiceAccepted: true,
   *   occupation: 'occupation',
   *   sumsubShareToken: 'sumsubShareToken',
   * });
   * ```
   */
  create(body: UserCreateParams, options?: RequestOptions): APIPromise<IssuingUser> {
    return this._client.post('/applications/user', { body, ...options });
  }

  /**
   * Retrieves the current status and details of a user's consumer application. This
   * includes the user's application progress and related information.
   *
   * @example
   * ```ts
   * const user = await client.applications.user.retrieve(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  retrieve(userID: string, options?: RequestOptions): APIPromise<UserRetrieveResponse> {
    return this._client.get(path`/applications/user/${userID}`, options);
  }

  /**
   * Updates the application information for a user, including personal details such
   * as name, birth date, occupation, national ID, and account purpose.
   *
   * @example
   * ```ts
   * const issuingUser = await client.applications.user.update(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  update(
    userID: string,
    body: UserUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<IssuingUser> {
    return this._client.patch(path`/applications/user/${userID}`, { body, ...options });
  }

  /**
   * Submits an initial application for creating a consumer account. This request
   * gathers basic personal details of the user, including their first and last name,
   * email address, and optional wallet address if using a Rain-managed solution or
   * hosted completion flow.
   *
   * @example
   * ```ts
   * const issuingUser =
   *   await client.applications.user.initiate();
   * ```
   */
  initiate(
    body: UserInitiateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<IssuingUser> {
    return this._client.post('/applications/user/initiate', { body, ...options });
  }

  /**
   * Allows a user to reapply or respond to a request for additional information
   * regarding their consumer application. This is used when the initial application
   * needs updating or more information is required.
   *
   * @deprecated
   */
  reapply(userID: string, body: UserReapplyParams, options?: RequestOptions): APIPromise<IssuingUser> {
    return this._client.put(path`/applications/user/${userID}/reapply`, { body, ...options });
  }

  /**
   * Uploads a document for a user to support their consumer application. This is
   * used to provide additional verification documents such as IDs, utility bills,
   * and other required legal documents.
   *
   * @example
   * ```ts
   * await client.applications.user.uploadDocument(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   { document: fs.createReadStream('path/to/file') },
   * );
   * ```
   */
  uploadDocument(userID: string, body: UserUploadDocumentParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put(
      path`/applications/user/${userID}/document`,
      multipartFormRequestOptions(
        { body, ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
        this._client,
      ),
    );
  }
}

/**
 * The details of an issuing application.
 */
export interface IssuingUser extends CompanyAPI.IssuingApplication {
  /**
   * The user's unique identifier
   */
  id: string;

  /**
   * The user's email address
   */
  email: string;

  /**
   * The user's first name
   */
  firstName: string;

  /**
   * Indicates whether the user account is active
   */
  isActive: boolean;

  /**
   * Indicates whether the user has accepted the terms of service
   */
  isTermsOfServiceAccepted: boolean;

  /**
   * The user's last name
   */
  lastName: string;

  /**
   * The user's address
   */
  address?: CompanyAPI.PhysicalAddress;

  /**
   * The identifier of the company the user belongs to, if applicable
   */
  companyId?: string;

  /**
   * The country code for the user's phone number
   */
  phoneCountryCode?: string;

  /**
   * The user's phone number
   */
  phoneNumber?: string;
}

/**
 * The details of an issuing application.
 */
export interface UserRetrieveResponse extends CompanyAPI.IssuingApplication {
  /**
   * The identifier of the user's application
   */
  id: string;
}

export type UserCreateParams =
  | UserCreateParams.UsingSumsubShareToken
  | UserCreateParams.UsingPersonaShareToken
  | UserCreateParams.UsingAPI;

export declare namespace UserCreateParams {
  export interface UsingSumsubShareToken {
    /**
     * The purpose of the user's account
     */
    accountPurpose: string;

    /**
     * The user's annual salary
     */
    annualSalary: string;

    /**
     * The estimated monthly spending amount for the user
     */
    expectedMonthlyVolume: string;

    /**
     * This user's IP address
     */
    ipAddress: string;

    /**
     * Indicates whether the user has accepted the terms of service
     */
    isTermsOfServiceAccepted: true;

    /**
     * The user's occupation
     */
    occupation: string;

    /**
     * The Sumsub share token used for user verification
     */
    sumsubShareToken: string;

    /**
     * The chain ID of the user's external collateral contract, if applicable. Not
     * required when using Rain's collateral contracts.
     */
    chainId?: string;

    /**
     * The address of the user's external collateral contract, if applicable. Not
     * required when using Rain's collateral contracts.
     */
    contractAddress?: string;

    /**
     * Indicates whether the user will use existing documents for additional
     * verification
     */
    hasExistingDocuments?: boolean;

    /**
     * The user's Solana address. Either walletAddress or solanaAddress is required if
     * using a Rain-managed solution, but optional otherwise.
     */
    solanaAddress?: string;

    /**
     * A unique identifier for the source of this user.
     */
    sourceKey?: string;

    /**
     * The user's Ethereum Virtual Machine (EVM) address. Either walletAddress or
     * solanaAddress is required if using a Rain-managed solution, but optional
     * otherwise.
     */
    walletAddress?: string;
  }

  export interface UsingPersonaShareToken {
    /**
     * The purpose of the user's account
     */
    accountPurpose: string;

    /**
     * The user's annual salary
     */
    annualSalary: string;

    /**
     * The estimated monthly spending amount for the user
     */
    expectedMonthlyVolume: string;

    /**
     * This user's IP address
     */
    ipAddress: string;

    /**
     * Indicates whether the user has accepted the terms of service
     */
    isTermsOfServiceAccepted: true;

    /**
     * The user's occupation
     */
    occupation: string;

    /**
     * The Persona inquiry ID
     */
    personaShareToken: string;

    /**
     * The chain ID of the user's external collateral contract, if applicable. Not
     * required when using Rain's collateral contracts.
     */
    chainId?: string;

    /**
     * The address of the user's external collateral contract, if applicable. Not
     * required when using Rain's collateral contracts.
     */
    contractAddress?: string;

    /**
     * Indicates whether the user will use existing documents for additional
     * verification
     */
    hasExistingDocuments?: boolean;

    /**
     * The user's Solana address. Either walletAddress or solanaAddress is required if
     * using a Rain-managed solution, but optional otherwise.
     */
    solanaAddress?: string;

    /**
     * A unique identifier for the source of this user.
     */
    sourceKey?: string;

    /**
     * The user's Ethereum Virtual Machine (EVM) address. Either walletAddress or
     * solanaAddress is required if using a Rain-managed solution, but optional
     * otherwise.
     */
    walletAddress?: string;
  }

  export interface UsingAPI {
    /**
     * The purpose of the user's account
     */
    accountPurpose: string;

    /**
     * The person's address
     */
    address: CompanyAPI.PhysicalAddress;

    /**
     * The user's annual salary
     */
    annualSalary: string;

    /**
     * The person's birth date
     */
    birthDate: string;

    /**
     * The 2-digit country code of the person's national ID issuer
     */
    countryOfIssue: string;

    /**
     * The user's email address
     */
    email: string;

    /**
     * The estimated monthly spending amount for the user
     */
    expectedMonthlyVolume: string;

    /**
     * The person's first name
     */
    firstName: string;

    /**
     * This user's IP address
     */
    ipAddress: string;

    /**
     * Indicates whether the user has accepted the terms of service
     */
    isTermsOfServiceAccepted: true;

    /**
     * The person's last name
     */
    lastName: string;

    /**
     * The person's national ID number. For the US, this is a 9-digit SSN
     */
    nationalId: string;

    /**
     * The user's occupation
     */
    occupation: string;

    /**
     * The person's unique identifier
     */
    id?: string;

    /**
     * The chain ID of the user's external collateral contract, if applicable. Not
     * required when using Rain's collateral contracts.
     */
    chainId?: string;

    /**
     * The address of the user's external collateral contract, if applicable. Not
     * required when using Rain's collateral contracts.
     */
    contractAddress?: string;

    /**
     * Indicates whether the user will use existing documents for additional
     * verification
     */
    hasExistingDocuments?: boolean;

    /**
     * The country code for the phone number
     */
    phoneCountryCode?: string;

    /**
     * The phone number of the person
     */
    phoneNumber?: string;

    /**
     * The user's Solana address. Either walletAddress or solanaAddress is required if
     * using a Rain-managed solution, but optional otherwise.
     */
    solanaAddress?: string;

    /**
     * A unique identifier for the source of this user.
     */
    sourceKey?: string;

    /**
     * The user's Ethereum Virtual Machine (EVM) address. Either walletAddress or
     * solanaAddress is required if using a Rain-managed solution, but optional
     * otherwise.
     */
    walletAddress?: string;
  }
}

export interface UserUpdateParams {
  /**
   * The purpose of the user's account
   */
  accountPurpose?: string;

  /**
   * The user's address
   */
  address?: CompanyAPI.PhysicalAddress;

  /**
   * The user's annual salary
   */
  annualSalary?: string;

  /**
   * The user's birth date
   */
  birthDate?: string;

  /**
   * The 2-digit country code of the user's national ID issuer
   */
  countryOfIssue?: string;

  /**
   * The estimated monthly spending amount for the user
   */
  expectedMonthlyVolume?: string;

  /**
   * The user's first name
   */
  firstName?: string;

  /**
   * Indicates whether the user will use existing documents for additional
   * verification
   */
  hasExistingDocuments?: boolean;

  /**
   * The user's IP address
   */
  ipAddress?: string;

  /**
   * Indicates whether the user has accepted the terms of service
   */
  isTermsOfServiceAccepted?: true;

  /**
   * The user's last name
   */
  lastName?: string;

  /**
   * The user's national ID number. For the US, this is a 9-digit SSN.
   */
  nationalId?: string;

  /**
   * The user's occupation
   */
  occupation?: string;
}

export interface UserInitiateParams {
  /**
   * The user's email address
   */
  email?: string;

  /**
   * The user's first name
   */
  firstName?: string;

  /**
   * The user's last name
   */
  lastName?: string;

  /**
   * The user's wallet address. Required if using the hosted completion flow and a
   * Rain-managed solution. Not required otherwise.
   */
  walletAddress?: string;
}

export interface UserReapplyParams {
  /**
   * The purpose of the user's account
   */
  accountPurpose: string;

  /**
   * The user's address
   */
  address: CompanyAPI.PhysicalAddress;

  /**
   * The user's annual salary
   */
  annualSalary: string;

  /**
   * The user's birth date
   */
  birthDate: string;

  /**
   * The 2-digit country code of the user's national ID issuer
   */
  countryOfIssue: string;

  /**
   * The estimated monthly spending amount for the user
   */
  expectedMonthlyVolume: string;

  /**
   * The user's IP address
   */
  ipAddress: string;

  /**
   * Indicates whether the user has accepted the terms of service
   */
  isTermsOfServiceAccepted: true;

  /**
   * The user's national ID number. For the US, this is a 9-digit SSN
   */
  nationalId: string;

  /**
   * The user's occupation
   */
  occupation: string;

  /**
   * Indicates whether the user will use existing documents for additional
   * verification
   */
  hasExistingDocuments?: boolean;
}

export interface UserUploadDocumentParams {
  /**
   * The actual document file to be uploaded. The document must be in binary format,
   * and the maximum allowed size is 20 MB.
   */
  document: Uploadable;

  /**
   * The country where the document was issued
   */
  country?: string;

  /**
   * The name or title of the document being uploaded
   */
  name?: string;

  /**
   * The side of the document being uploaded
   */
  side?: 'front' | 'back';

  /**
   * The type of the document being uploaded
   */
  type?:
    | 'idCard'
    | 'passport'
    | 'drivers'
    | 'residencePermit'
    | 'utilityBill'
    | 'selfie'
    | 'videoSelfie'
    | 'profileImage'
    | 'idDocPhoto'
    | 'agreement'
    | 'contract'
    | 'driversTranslation'
    | 'investorDoc'
    | 'vehicleRegistrationCertificate'
    | 'incomeSource'
    | 'paymentMethod'
    | 'bankCard'
    | 'covidVaccinationForm'
    | 'other';
}

export declare namespace User {
  export {
    type IssuingUser as IssuingUser,
    type UserRetrieveResponse as UserRetrieveResponse,
    type UserCreateParams as UserCreateParams,
    type UserUpdateParams as UserUpdateParams,
    type UserInitiateParams as UserInitiateParams,
    type UserReapplyParams as UserReapplyParams,
    type UserUploadDocumentParams as UserUploadDocumentParams,
  };
}
