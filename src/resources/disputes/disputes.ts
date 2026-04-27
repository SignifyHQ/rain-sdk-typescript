// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as EvidenceAPI from './evidence';
import { Evidence, EvidenceUploadParams } from './evidence';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Disputes extends APIResource {
  evidence: EvidenceAPI.Evidence = new EvidenceAPI.Evidence(this._client);

  /**
   * Retrieve details of a specific dispute using its unique ID.
   */
  retrieve(disputeID: string, options?: RequestOptions): APIPromise<IssuingDispute> {
    return this._client.get(path`/disputes/${disputeID}`, options);
  }

  /**
   * Update the status or evidence of a dispute, typically to mark it as canceled or
   * add new evidence.
   */
  update(
    disputeID: string,
    body: DisputeUpdateParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<void> {
    return this._client.patch(path`/disputes/${disputeID}`, {
      body,
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Retrieve all disputes, optionally filtered by company, user, or transaction ID.
   */
  list(
    query: DisputeListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DisputeListResponse> {
    return this._client.get('/disputes', { query, ...options });
  }
}

/**
 * Represents a dispute related to an issuing transaction.
 */
export interface IssuingDispute {
  /**
   * The dispute's unique identifier
   */
  id: string;

  /**
   * The date and time when the dispute was created
   */
  createdAt: string;

  /**
   * The current status of the dispute
   */
  status: 'pending' | 'inReview' | 'accepted' | 'rejected' | 'canceled';

  /**
   * The transaction's unique identifier
   */
  transactionId: string;

  /**
   * The date and time when the dispute was resolved, if applicable
   */
  resolvedAt?: string;

  /**
   * Textual evidence provided by the parties involved in the dispute
   */
  textEvidence?: string;
}

export type DisputeListResponse = Array<IssuingDispute>;

export interface DisputeUpdateParams {
  /**
   * The new status of the dispute. Can only be set to 'canceled'.
   */
  status?: 'canceled';

  /**
   * The textual evidence to add to the dispute
   */
  textEvidence?: string;
}

export interface DisputeListParams {
  /**
   * For corporate cards, the identifier of the company to get disputes for
   */
  companyId?: string;

  /**
   * The ID of the resource after which to start fetching
   */
  cursor?: string;

  /**
   * The number of resources to fetch
   */
  limit?: number;

  /**
   * The ID of the transaction to get disputes for
   */
  transactionId?: string;

  /**
   * The ID of the user to get disputes for
   */
  userId?: string;
}

Disputes.Evidence = Evidence;

export declare namespace Disputes {
  export {
    type IssuingDispute as IssuingDispute,
    type DisputeListResponse as DisputeListResponse,
    type DisputeUpdateParams as DisputeUpdateParams,
    type DisputeListParams as DisputeListParams,
  };

  export { Evidence as Evidence, type EvidenceUploadParams as EvidenceUploadParams };
}
