// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { type Uploadable } from '../../../../core/uploads';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { multipartFormRequestOptions } from '../../../../internal/uploads';
import { path } from '../../../../internal/utils/path';

export class Document extends APIResource {
  /**
   * Uploads a document for a company's Ultimate Beneficial Owner (UBO) to support
   * the company's corporate application. This endpoint allows for the submission of
   * various legal and identification documents.
   *
   * @example
   * ```ts
   * await client.applications.company.ubo.document.upload(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   {
   *     companyId: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     document: fs.createReadStream('path/to/file'),
   *   },
   * );
   * ```
   */
  upload(uboID: string, params: DocumentUploadParams, options?: RequestOptions): APIPromise<void> {
    const { companyId, ...body } = params;
    return this._client.put(
      path`/applications/company/${companyId}/ubo/${uboID}/document`,
      multipartFormRequestOptions(
        { body, ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
        this._client,
      ),
    );
  }
}

export interface DocumentUploadParams {
  /**
   * Path param: The identifier of the company to upload a document for
   */
  companyId: string;

  /**
   * Body param: The actual document file to be uploaded. The document must be in
   * binary format, and the maximum allowed size is 20 MB.
   */
  document: Uploadable;

  /**
   * Body param: The country where the document was issued
   */
  country?: string;

  /**
   * Body param: The side of the document being uploaded
   */
  side?: 'front' | 'back';

  /**
   * Body param: The type of the document being uploaded
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

export declare namespace Document {
  export { type DocumentUploadParams as DocumentUploadParams };
}
