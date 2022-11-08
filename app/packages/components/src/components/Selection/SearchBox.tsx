import React from "react";

import styled from "styled-components";

import { useTheme } from "@fiftyone/components";
import { Close } from "@mui/icons-material";

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchInput = styled.input`
  width: 100%;
  margin: 0.75rem 1rem;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.primary.plainBorder};
  padding: 0.25rem 0.5rem;

  &:focus {
    border: 1px solid ${({ theme }) => theme.primary.softBorder};
    outline: none;
  }
`;

export const SearchBox = ({
  searchTerm,
  searchPlaceholder,
  setSearchTerm,
  debouncedSearch,
  searchValue,
}: {
  searchTerm: string;
  searchPlaceholder?: string;
  setSearchTerm: (term: string) => void;
  debouncedSearch: (term: string) => void;
  searchValue?: string;
}) => {
  const theme = useTheme();
  return (
    <Box>
      <SearchInput
        value={searchTerm}
        placeholder={searchPlaceholder}
        onChange={(e) => {
          const val: string = e.target.value;
          setSearchTerm(val);
          debouncedSearch(val);
        }}
        defaultValue={searchValue}
        onKeyDown={(e) => {
          e.stopPropagation();
        }}
        onKeyUp={(e) => {
          e.stopPropagation();
        }}
      />
      {searchValue && (
        <Close
          onClick={() => {
            setSearchTerm("");
            debouncedSearch("");
          }}
          fontSize="small"
          style={{
            cursor: "pointer",
            color: theme.text.secondary,
            position: "absolute",
            right: 16,
          }}
        />
      )}
    </Box>
  );
};
