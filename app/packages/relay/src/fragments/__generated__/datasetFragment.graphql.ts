/**
 * @generated SignedSource<<d0a1758d0a26c641e19ffddccf132857>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { InlineFragment, ReaderInlineDataFragment } from 'relay-runtime';
export type MediaType = "group" | "image" | "point_cloud" | "video" | "%future added value";
export type SidebarMode = "all" | "best" | "fast" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type datasetFragment$data = {
  readonly dataset: {
    readonly appConfig: {
      readonly gridMediaField: string | null;
      readonly mediaFields: ReadonlyArray<string> | null;
      readonly modalMediaField: string | null;
      readonly plugins: any | null;
      readonly sidebarMode: SidebarMode | null;
    } | null;
    readonly brainMethods: ReadonlyArray<{
      readonly config: {
        readonly cls: string;
        readonly embeddingsField: string | null;
        readonly method: string | null;
        readonly patchesField: string | null;
      } | null;
      readonly key: string;
      readonly timestamp: any | null;
      readonly version: string | null;
      readonly viewStages: ReadonlyArray<string> | null;
    }> | null;
    readonly createdAt: any | null;
    readonly defaultGroupSlice: string | null;
    readonly defaultMaskTargets: ReadonlyArray<{
      readonly target: string;
      readonly value: string;
    }> | null;
    readonly defaultSkeleton: {
      readonly edges: ReadonlyArray<ReadonlyArray<number>>;
      readonly labels: ReadonlyArray<string> | null;
    } | null;
    readonly evaluations: ReadonlyArray<{
      readonly config: {
        readonly cls: string;
        readonly gtField: string | null;
        readonly predField: string | null;
      } | null;
      readonly key: string;
      readonly timestamp: any | null;
      readonly version: string | null;
      readonly viewStages: ReadonlyArray<string> | null;
    }> | null;
    readonly groupField: string | null;
    readonly groupMediaTypes: ReadonlyArray<{
      readonly mediaType: MediaType;
      readonly name: string;
    }> | null;
    readonly id: string;
    readonly info: any | null;
    readonly lastLoadedAt: any | null;
    readonly maskTargets: ReadonlyArray<{
      readonly name: string;
      readonly targets: ReadonlyArray<{
        readonly target: string;
        readonly value: string;
      }>;
    }>;
    readonly mediaType: MediaType | null;
    readonly name: string;
    readonly savedViewSlug: string | null;
    readonly skeletons: ReadonlyArray<{
      readonly edges: ReadonlyArray<ReadonlyArray<number>>;
      readonly labels: ReadonlyArray<string> | null;
      readonly name: string;
    }>;
    readonly version: string | null;
    readonly viewName: string | null;
    readonly " $fragmentSpreads": FragmentRefs<"frameFieldsFragment" | "sampleFieldsFragment" | "sidebarGroupsFragment" | "viewFragment">;
  } | null;
  readonly " $fragmentType": "datasetFragment";
};
export type datasetFragment$key = {
  readonly " $data"?: datasetFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"datasetFragment">;
};

const node: ReaderInlineDataFragment = {
  "kind": "InlineDataFragment",
  "name": "datasetFragment"
};

(node as any).hash = "6ed11d33730564beab44f8c1b3bf9f01";

export default node;
