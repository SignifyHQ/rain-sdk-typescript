// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as CompanyAPI from '../company';
import * as DocumentAPI from './document';
import { Document, DocumentUploadParams } from './document';
import { APIPromise } from '../../../../core/api-promise';
import { type Uploadable } from '../../../../core/uploads';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { multipartFormRequestOptions } from '../../../../internal/uploads';
import { path } from '../../../../internal/utils/path';

export class Ubo extends APIResource {
  document: DocumentAPI.Document = new DocumentAPI.Document(this._client);

  /**
   * Updates the application information for a company's Ultimate Beneficial Owner
   * (UBO). This allows modification of the UBO's personal details such as name,
   * birth date, national ID, and address.
   *
   * @example
   * ```ts
   * const issuingCompany =
   *   await client.applications.company.ubo.update(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { companyId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
   *   );
   * ```
   */
  update(
    uboID: string,
    params: UboUpdateParams,
    options?: RequestOptions,
  ): APIPromise<CompanyAPI.IssuingCompany> {
    const { companyId, ...body } = params;
    return this._client.patch(path`/applications/company/${companyId}/ubo/${uboID}`, { body, ...options });
  }

  /**
   * This deprecated endpoint allows the upload of a document for a UBO to support a
   * company's corporate application. It is recommended to use the newer endpoint for
   * document uploads.
   *
   * @deprecated
   */
  uploadDocument(
    companyID: string,
    body: UboUploadDocumentParams,
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.put(
      path`/applications/company/${companyID}/ubo/document`,
      multipartFormRequestOptions(
        { body, ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
        this._client,
      ),
    );
  }
}

export interface UboUpdateParams {
  /**
   * Path param: The identifier of the company whose UBO's application is being
   * updated
   */
  companyId: string;

  /**
   * Body param: The UBO's address
   */
  address?: CompanyAPI.PhysicalAddress;

  /**
   * Body param: The UBO's birth date
   */
  birthDate?: string;

  /**
   * Body param: The 2-digit country code of the user's national ID issuer
   */
  countryOfIssue?: string;

  /**
   * Body param: The UBO's email address
   */
  email?: string;

  /**
   * Body param: The UBO's first name
   */
  firstName?: string;

  /**
   * Body param: The UBO's last name
   */
  lastName?: string;

  /**
   * Body param: The UBO's national ID number. For the US, this is a 9-digit SSN
   */
  nationalId?: string;
}

export interface UboUploadDocumentParams {
  /**
   * The actual document file to be uploaded. The document must be in binary format,
   * and the maximum allowed size is 20 MB.
   */
  document: Uploadable;

  /**
   * The UBO's email address
   */
  email: string;

  /**
   * The country where the document was issued
   */
  country?: string;

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

Ubo.Document = Document;

export declare namespace Ubo {
  export { type UboUpdateParams as UboUpdateParams, type UboUploadDocumentParams as UboUploadDocumentParams };

  export { Document as Document, type DocumentUploadParams as DocumentUploadParams };
}
