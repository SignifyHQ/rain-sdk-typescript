// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as UserAPI from '../applications/user';
import * as SignaturesAPI from './signatures';
import {
  IssuingSignature,
  SignatureRetrievePaymentSignatureParams,
  SignatureRetrieveWithdrawalSignatureParams,
  Signatures,
} from './signatures';
import * as CompanyAPI from '../applications/company/company';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Companies extends APIResource {
  signatures: SignaturesAPI.Signatures = new SignaturesAPI.Signatures(this._client);

  /**
   * Retrieve detailed information about a specific company using its unique ID
   */
  retrieve(companyID: string, options?: RequestOptions): APIPromise<CompanyAPI.IssuingCompany> {
    return this._client.get(path`/companies/${companyID}`, options);
  }

  /**
   * Update the details of an existing company such as its name and address
   */
  update(
    companyID: string,
    body: CompanyUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CompanyAPI.IssuingCompany> {
    return this._client.patch(path`/companies/${companyID}`, { body, ...options });
  }

  /**
   * Retrieves a list of all companies registered in the system
   */
  list(
    query: CompanyListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CompanyListResponse> {
    return this._client.get('/companies', { query, ...options });
  }

  /**
   * Initiate a custom fee charge for a company.
   */
  charge(
    companyID: string,
    body: CompanyChargeParams,
    options?: RequestOptions,
  ): APIPromise<IssuingChargeCreateResponse> {
    return this._client.post(path`/companies/${companyID}/charges`, { body, ...options });
  }

  /**
   * Creates a new user within a specific company. The user must provide details such
   * as their name, birthdate, and contact information.
   */
  createUser(
    companyID: string,
    body: CompanyCreateUserParams,
    options?: RequestOptions,
  ): APIPromise<UserAPI.IssuingUser> {
    return this._client.post(path`/companies/${companyID}/users`, { body, ...options });
  }

  /**
   * Initiate a payment for a specific company by providing the payment amount and
   * wallet address.
   */
  initiatePayment(
    companyID: string,
    body: CompanyInitiatePaymentParams,
    options?: RequestOptions,
  ): APIPromise<CompanyInitiatePaymentResponse> {
    return this._client.post(path`/companies/${companyID}/payments`, { body, ...options });
  }

  /**
   * Retrieve the current credit balances of a company, including credit limits,
   * pending charges, and the amount due.
   */
  retrieveBalances(companyID: string, options?: RequestOptions): APIPromise<CompanyRetrieveBalancesResponse> {
    return this._client.get(path`/companies/${companyID}/balances`, options);
  }

  /**
   * Retrieve the smart contract details associated with a company
   */
  retrieveContracts(
    companyID: string,
    options?: RequestOptions,
  ): APIPromise<CompanyRetrieveContractsResponse> {
    return this._client.get(path`/companies/${companyID}/contracts`, options);
  }
}

/**
 * Represents the body of a request to create a charge, including the amount and a
 * description of the charge.
 */
export interface IssuingChargeCreateBody {
  /**
   * The amount of the charge, in cents
   */
  amount: number;

  /**
   * The description of the charge
   */
  description: string;
}

/**
 * Represents the response body returned after a charge is created, including the
 * charge ID, creation timestamp, and charge details.
 */
export interface IssuingChargeCreateResponse {
  /**
   * The identifier of the charge
   */
  id: string;

  /**
   * The date and time when the charge was created
   */
  createdAt: string;

  /**
   * The amount of the charge, in cents
   */
  amount?: number;

  /**
   * The description of the charge
   */
  description?: string;
}

/**
 * Represents an issuing contract with details about its deployment and token
 * handling.
 */
export interface IssuingContract {
  /**
   * The contract's unique identifier
   */
  id: string;

  /**
   * The chain ID (base-10 number) that the smart contract is deployed on
   */
  chainId: number;

  /**
   * Version of the contract
   */
  contractVersion: number;

  /**
   * The address of the contract's controller
   */
  controllerAddress: string;

  /**
   * The proxy address of the contract
   */
  proxyAddress: string;

  /**
   * Tokens that the contract accepts for transactions
   */
  tokens: Array<IssuingContract.Token>;

  /**
   * The address where funds should be deposited
   */
  depositAddress?: string;
}

export namespace IssuingContract {
  export interface Token {
    /**
     * The address of the token contract
     */
    address: string;

    /**
     * The advance rate for the token
     */
    advanceRate?: number;

    /**
     * The balance of the token
     */
    balance?: string;

    /**
     * The exchange rate for the token
     */
    exchangeRate?: number;
  }
}

export type CompanyListResponse = Array<CompanyAPI.IssuingCompany>;

export interface CompanyInitiatePaymentResponse {
  /**
   * The address to send the payment to
   */
  address: string;
}

export interface CompanyRetrieveBalancesResponse {
  /**
   * Balance due of the company, in cents
   */
  balanceDue: number;

  /**
   * Credit limit of the company, in cents
   */
  creditLimit: number;

  /**
   * Pending charges of the company, in cents
   */
  pendingCharges: number;

  /**
   * Posted charges of the company, in cents
   */
  postedCharges: number;

  /**
   * The amount of money the company can spend, in cents
   */
  spendingPower: number;
}

export type CompanyRetrieveContractsResponse = Array<IssuingContract>;

export interface CompanyUpdateParams {
  /**
   * The company's physical address
   */
  address?: CompanyAPI.PhysicalAddress;

  /**
   * The company's name on the Rain platform
   */
  name?: string;
}

export interface CompanyListParams {
  /**
   * The ID of the resource after which to start fetching
   */
  cursor?: string;

  /**
   * The number of resources to fetch
   */
  limit?: number;
}

export interface CompanyChargeParams {
  /**
   * The amount of the charge, in cents
   */
  amount: number;

  /**
   * The description of the charge
   */
  description: string;
}

export interface CompanyCreateUserParams {
  /**
   * The user's email address
   */
  email: string;

  /**
   * The user's first name
   */
  firstName: string;

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
   * The user's birth date
   */
  birthDate?: string;

  /**
   * The user's phone country code
   */
  phoneCountryCode?: string;

  /**
   * The user's phone number
   */
  phoneNumber?: string;

  /**
   * The user's wallet address
   */
  walletAddress?: string;
}

export interface CompanyInitiatePaymentParams {
  /**
   * The amount of the payment, in cents
   */
  amount: number;

  /**
   * The wallet address the payment is being sent from
   */
  walletAddress: string;

  /**
   * The chain ID (base-10 number) that the payment transaction is on
   */
  chainId?: number;
}

Companies.Signatures = Signatures;

export declare namespace Companies {
  export {
    type IssuingChargeCreateBody as IssuingChargeCreateBody,
    type IssuingChargeCreateResponse as IssuingChargeCreateResponse,
    type IssuingContract as IssuingContract,
    type CompanyListResponse as CompanyListResponse,
    type CompanyInitiatePaymentResponse as CompanyInitiatePaymentResponse,
    type CompanyRetrieveBalancesResponse as CompanyRetrieveBalancesResponse,
    type CompanyRetrieveContractsResponse as CompanyRetrieveContractsResponse,
    type CompanyUpdateParams as CompanyUpdateParams,
    type CompanyListParams as CompanyListParams,
    type CompanyChargeParams as CompanyChargeParams,
    type CompanyCreateUserParams as CompanyCreateUserParams,
    type CompanyInitiatePaymentParams as CompanyInitiatePaymentParams,
  };

  export {
    Signatures as Signatures,
    type IssuingSignature as IssuingSignature,
    type SignatureRetrievePaymentSignatureParams as SignatureRetrievePaymentSignatureParams,
    type SignatureRetrieveWithdrawalSignatureParams as SignatureRetrieveWithdrawalSignatureParams,
  };
}
