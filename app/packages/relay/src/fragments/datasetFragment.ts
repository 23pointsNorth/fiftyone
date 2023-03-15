import { graphql } from "relay-runtime";

export default graphql`
  fragment datasetFragment on Query @inline {
    dataset(name: $name, view: $view, savedViewSlug: $savedViewSlug) {
      ...frameFieldsFragment
      ...sampleFieldsFragment
      ...sidebarGroupsFragment
      ...viewFragment
      id
      name
      mediaType
      defaultGroupSlice
      groupField
      groupMediaTypes {
        name
        mediaType
      }
      appConfig {
        gridMediaField
        mediaFields
        modalMediaField
        plugins
        sidebarMode
      }
      maskTargets {
        name
        targets {
          target
          value
        }
      }
      defaultMaskTargets {
        target
        value
      }
      evaluations {
        key
        version
        timestamp
        viewStages
        config {
          cls
          predField
          gtField
        }
      }
      brainMethods {
        key
        version
        timestamp
        viewStages
        config {
          cls
          embeddingsField
          method
          patchesField
        }
      }
      lastLoadedAt
      createdAt
      skeletons {
        name
        labels
        edges
      }
      defaultSkeleton {
        labels
        edges
      }
      version
      viewName
      savedViewSlug
      info
    }
  }
`;
