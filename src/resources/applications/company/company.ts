// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as CompanyAPI from './company';
import * as UboAPI from './ubo/ubo';
import { Ubo, UboUpdateParams, UboUploadDocumentParams } from './ubo/ubo';
import { APIPromise } from '../../../core/api-promise';
import { type Uploadable } from '../../../core/uploads';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { multipartFormRequestOptions } from '../../../internal/uploads';
import { path } from '../../../internal/utils/path';

export class Company extends APIResource {
  ubo: UboAPI.Ubo = new UboAPI.Ubo(this._client);

  /**
   * Submits an application to create a corporate account. The application requires
   * details about the company, its legal entity, representatives, and beneficial
   * owners. The initial user must provide a wallet address.
   *
   * @example
   * ```ts
   * const issuingCompany = await client.applications.company.create({
   *   address: {
   *     city: 'city',
   *     country: 'country',
   *     countryCode: 'xx',
   *     line1: 'line1',
   *     postalCode: 'postalCode',
   *     region: 'region',
   *   },
   *   entity: {
   *     name: 'name',
   *     registrationNumber: 'registrationNumber',
   *     taxId: 'taxId',
   *     website: 'website',
   *   },
   *   initialUser: {
   *     address: { ... },
   *     birthDate: '2000-01-01',
   *     countryOfIssue: 'xx',
   *     email: 'email',
   *     firstName: 'firstName',
   *     lastName: 'lastName',
   *     nationalId: 'nationalId',
   *     ipAddress: 'ipAddress',
   *     isTermsOfServiceAccepted: true,
   *   },
   *   name: 'name',
   *   representatives: [
   *     {
   *       address: { ... },
   *       birthDate: '2000-01-01',
   *       countryOfIssue: 'xx',
   *       email: 'email',
   *       firstName: 'firstName',
   *       lastName: 'lastName',
   *       nationalId: 'nationalId',
   *     },
   *   ],
   *   ultimateBeneficialOwners: [
   *     {
   *       address: { ... },
   *       birthDate: '2000-01-01',
   *       countryOfIssue: 'xx',
   *       email: 'email',
   *       firstName: 'firstName',
   *       lastName: 'lastName',
   *       nationalId: 'nationalId',
   *     },
   *   ],
   * });
   * ```
   */
  create(body: CompanyCreateParams, options?: RequestOptions): APIPromise<IssuingCompany> {
    return this._client.post('/applications/company', { body, ...options });
  }

  /**
   * Retrieves the current status and details of a company's corporate application,
   * including the company's ultimate beneficial owners and application progress.
   *
   * @example
   * ```ts
   * const company = await client.applications.company.retrieve(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   * );
   * ```
   */
  retrieve(companyID: string, options?: RequestOptions): APIPromise<CompanyRetrieveResponse> {
    return this._client.get(path`/applications/company/${companyID}`, options);
  }

  /**
   * Updates the information for an existing corporate account application. The
   * company's details, including name, address, and legal entity information, can be
   * modified through this endpoint.
   *
   * @example
   * ```ts
   * const issuingCompany =
   *   await client.applications.company.update(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   * ```
   */
  update(
    companyID: string,
    body: CompanyUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<IssuingCompany> {
    return this._client.patch(path`/applications/company/${companyID}`, { body, ...options });
  }

  /**
   * Allows a company to reapply or respond to a request for information after
   * submitting their corporate application. This endpoint is typically used when
   * additional information or corrections are needed.
   *
   * @deprecated
   */
  reapply(
    companyID: string,
    body: CompanyReapplyParams,
    options?: RequestOptions,
  ): APIPromise<IssuingCompany> {
    return this._client.put(path`/applications/company/${companyID}/reapply`, { body, ...options });
  }

  /**
   * Uploads a document that supports a company's corporate application. This is
   * typically used to provide additional documentation, such as proof of address,
   * incorporation certificates, or other required legal documents.
   *
   * @example
   * ```ts
   * await client.applications.company.uploadDocument(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   { document: fs.createReadStream('path/to/file') },
   * );
   * ```
   */
  uploadDocument(
    companyID: string,
    body: CompanyUploadDocumentParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.put(
      path`/applications/company/${companyID}/document`,
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
export interface IssuingApplication {
  /**
   * Represents the possible statuses of an application.
   */
  applicationStatus:
    | 'approved'
    | 'pending'
    | 'needsInformation'
    | 'needsVerification'
    | 'manualReview'
    | 'denied'
    | 'locked'
    | 'canceled';

  /**
   * The link to the application completion page
   */
  applicationCompletionLink?: IssuingApplication.ApplicationCompletionLink;

  /**
   * @deprecated The link to the external verification page for the application
   */
  applicationExternalVerificationLink?: IssuingApplication.ApplicationExternalVerificationLink;

  /**
   * The reason behind the current application status
   */
  applicationReason?: string;
}

export namespace IssuingApplication {
  /**
   * The link to the application completion page
   */
  export interface ApplicationCompletionLink {
    /**
     * The URL for the completion page
     */
    url: string;

    params?: ApplicationCompletionLink.Params;
  }

  export namespace ApplicationCompletionLink {
    export interface Params {
      /**
       * The user's unique identifier
       */
      userId?: string;
    }
  }

  /**
   * @deprecated The link to the external verification page for the application
   */
  export interface ApplicationExternalVerificationLink {
    /**
     * The URL for the external verification page
     */
    url: string;

    params?: ApplicationExternalVerificationLink.Params;
  }

  export namespace ApplicationExternalVerificationLink {
    export interface Params {
      /**
       * The user's unique identifier
       */
      userId?: string;
    }
  }
}

export interface IssuingApplicationPerson {
  /**
   * The person's address
   */
  address: PhysicalAddress;

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
   * The person's first name
   */
  firstName: string;

  /**
   * The person's last name
   */
  lastName: string;

  /**
   * The person's national ID number. For the US, this is a 9-digit SSN
   */
  nationalId: string;

  /**
   * The person's unique identifier
   */
  id?: string;

  /**
   * The country code for the phone number
   */
  phoneCountryCode?: string;

  /**
   * The phone number of the person
   */
  phoneNumber?: string;
}

/**
 * The details of an issuing application.
 */
export interface IssuingCompany extends IssuingApplication {
  /**
   * The company's unique identifier
   */
  id: string;

  /**
   * The company's physical address
   */
  address: PhysicalAddress;

  /**
   * The company's name on the Rain platform
   */
  name: string;

  /**
   * The company's ultimate beneficial owners (UBOs)
   */
  ultimateBeneficialOwners?: Array<IssuingCompany.UltimateBeneficialOwner>;
}

export namespace IssuingCompany {
  /**
   * The details of an issuing application.
   */
  export interface UltimateBeneficialOwner extends CompanyAPI.IssuingApplication {
    /**
     * The UBO's unique identifier
     */
    id: string;
  }
}

/**
 * Represents a physical address with components like street, city, region, postal
 * code, and country.
 */
export interface PhysicalAddress {
  /**
   * The city of the address
   */
  city: string;

  /**
   * The full name of the country
   */
  country: string;

  /**
   * The 2-letter country code of the address
   */
  countryCode: string;

  /**
   * The first line of the street address
   */
  line1: string;

  /**
   * The postal or zip code of the address
   */
  postalCode: string;

  /**
   * The region or state of the address
   */
  region: string;

  /**
   * The second line of the street address (optional)
   */
  line2?: string;
}

/**
 * The details of an issuing application.
 */
export interface CompanyRetrieveResponse extends IssuingApplication {
  /**
   * The identifier of the company application
   */
  id: string;

  /**
   * The company's ultimate beneficial owners (UBOs)
   */
  ultimateBeneficialOwners: Array<CompanyRetrieveResponse.UltimateBeneficialOwner>;
}

export namespace CompanyRetrieveResponse {
  /**
   * The details of an issuing application.
   */
  export interface UltimateBeneficialOwner extends CompanyAPI.IssuingApplication {
    /**
     * The UBO's unique identifier
     */
    id: string;

    /**
     * The UBO's email address
     */
    email?: string;

    /**
     * The UBO's first name
     */
    firstName?: string;

    /**
     * The UBO's last name
     */
    lastName?: string;
  }
}

export interface CompanyCreateParams {
  /**
   * The company's physical address
   */
  address: PhysicalAddress;

  /**
   * The company's legal entity details.
   */
  entity: CompanyCreateParams.Entity;

  /**
   * The initial user of the company. This user must have a wallet address, and their
   * wallet address will be associated as an owner on the company's Rain smart
   * contract.
   */
  initialUser: CompanyCreateParams.InitialUser;

  /**
   * The name of the company requesting to create an account
   */
  name: string;

  /**
   * The company's representatives
   */
  representatives: Array<IssuingApplicationPerson>;

  /**
   * The company's ultimate beneficial owners (UBOs)
   */
  ultimateBeneficialOwners: Array<IssuingApplicationPerson>;

  /**
   * The chain ID of the external collateral contract, if used. Not required when
   * using Rain's collateral contracts.
   */
  chainId?: string;

  /**
   * The address of the external collateral contract, if used. Not required when
   * using Rain's collateral contracts.
   */
  contractAddress?: string;

  /**
   * A unique identifier for the origin of the user
   */
  sourceKey?: string;
}

export namespace CompanyCreateParams {
  /**
   * The company's legal entity details.
   */
  export interface Entity {
    /**
     * The legal entity's name
     */
    name: string;

    /**
     * The legal entity's registration number
     */
    registrationNumber: string;

    /**
     * The legal entity's national tax id
     */
    taxId: string;

    /**
     * The legal entity's website
     */
    website: string;

    /**
     * A brief description of the legal entity and its activities
     */
    description?: string;

    /**
     * The estimated monthly spending by the legal entity
     */
    expectedSpend?: string;

    /**
     * The type of legal entity (e.g., LLC, S Corp)
     */
    type?: string;
  }

  /**
   * The initial user of the company. This user must have a wallet address, and their
   * wallet address will be associated as an owner on the company's Rain smart
   * contract.
   */
  export interface InitialUser extends CompanyAPI.IssuingApplicationPerson {
    /**
     * This user's IP address
     */
    ipAddress: string;

    /**
     * Indicates whether the user has accepted the terms of service
     */
    isTermsOfServiceAccepted: true;

    /**
     * This user's role at their company (not their role on the Rain platform)
     */
    role?: string;

    /**
     * The user's Solana address. Either this or a EVM address is required if using a
     * Rain-managed solution, but optional otherwise.
     */
    solanaAddress?: string;

    /**
     * The user's Ethereum Virtual Machine (EVM) address. Either this or a Solana
     * address is required if using a Rain-managed solution, but optional otherwise.
     */
    walletAddress?: string;
  }
}

export interface CompanyUpdateParams {
  /**
   * The company's physical address
   */
  address?: PhysicalAddress;

  /**
   * The company's legal entity details.
   */
  entity?: CompanyUpdateParams.Entity;

  /**
   * The name of the company for the corporate application
   */
  name?: string;
}

export namespace CompanyUpdateParams {
  /**
   * The company's legal entity details.
   */
  export interface Entity {
    /**
     * A brief description of the legal entity and its activities
     */
    description?: string;

    /**
     * The estimated monthly spending by the legal entity
     */
    expectedSpend?: string;

    /**
     * The legal entity's registration number
     */
    registrationNumber?: string;

    /**
     * The legal entity's national tax ID
     */
    taxId?: string;

    /**
     * The type of legal entity (e.g., LLC, S Corp)
     */
    type?: string;

    /**
     * The legal entity's website
     */
    website?: string;
  }
}

export interface CompanyReapplyParams {
  /**
   * The company's physical address
   */
  address: PhysicalAddress;

  /**
   * The company's legal entity details.
   */
  entity: CompanyReapplyParams.Entity;

  /**
   * The initial user of the company who will be the owner on the Rain smart
   * contract. This user must provide various personal details.
   */
  initialUser: CompanyReapplyParams.InitialUser;

  /**
   * The name of the company reapplying for the corporate application
   */
  name: string;

  /**
   * The company's representatives
   */
  representatives: Array<IssuingApplicationPerson>;

  /**
   * The company's ultimate beneficial owners (UBOs)
   */
  ultimateBeneficialOwners: Array<IssuingApplicationPerson>;
}

export namespace CompanyReapplyParams {
  /**
   * The company's legal entity details.
   */
  export interface Entity {
    /**
     * The legal entity's website
     */
    website: string;

    /**
     * A brief description of the legal entity, and its activities
     */
    description?: string;

    /**
     * The estimated monthly spending by the legal entity
     */
    expectedSpend?: string;

    /**
     * The type of legal entity (e.g., LLC, S Corp)
     */
    type?: string;
  }

  /**
   * The initial user of the company who will be the owner on the Rain smart
   * contract. This user must provide various personal details.
   */
  export interface InitialUser {
    /**
     * The user's address
     */
    address: CompanyAPI.PhysicalAddress;

    /**
     * The user's birth date
     */
    birthDate: string;

    /**
     * The 2-digit country code of the user's national ID issuer
     */
    countryOfIssue: string;

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
     * This user's role at their company (not their role on the Rain platform)
     */
    role?: string;
  }
}

export interface CompanyUploadDocumentParams {
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
   * The name of the document being uploaded
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
    | 'directorsRegistry'
    | 'stateRegistry'
    | 'incumbencyCert'
    | 'proofOfAddress'
    | 'trustAgreement'
    | 'informationStatement'
    | 'incorporationCert'
    | 'incorporationArticles'
    | 'shareholderRegistry'
    | 'goodStandingCert'
    | 'powerOfAttorney'
    | 'other';
}

Company.Ubo = Ubo;

export declare namespace Company {
  export {
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
    Ubo as Ubo,
    type UboUpdateParams as UboUpdateParams,
    type UboUploadDocumentParams as UboUploadDocumentParams,
  };
}
