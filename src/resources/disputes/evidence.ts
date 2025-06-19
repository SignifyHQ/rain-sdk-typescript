// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { type Uploadable } from '../../core/uploads';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { multipartFormRequestOptions } from '../../internal/uploads';
import { path } from '../../internal/utils/path';

export class Evidence extends APIResource {
  /**
   * Retrieve the file evidence associated with a dispute.
   */
  list(disputeID: string, options?: RequestOptions): APIPromise<Response> {
    return this._client.get(path`/disputes/${disputeID}/evidence`, {
      ...options,
      headers: buildHeaders([{ Accept: 'application/octet-stream' }, options?.headers]),
      __binaryResponse: true,
    });
  }

  /**
   * Upload a file that will serve as evidence for a dispute.
   */
  upload(disputeID: string, body: EvidenceUploadParams, options?: RequestOptions): APIPromise<void> {
    return this._client.put(
      path`/disputes/${disputeID}/evidence`,
      multipartFormRequestOptions(
        { body, ...options, headers: buildHeaders([{ Accept: '*/*' }, options?.headers]) },
        this._client,
      ),
    );
  }
}

export interface EvidenceUploadParams {
  /**
   * The evidence to upload
   */
  evidence: Uploadable;

  /**
   * The name of the evidence
   */
  name: string;

  /**
   * The type of evidence
   */
  type: string;
}

export declare namespace Evidence {
  export { type EvidenceUploadParams as EvidenceUploadParams };
}
