import React from 'react';
import styled from 'styled-components';
import { SmallText, MediumText } from '../styles/typo';

const ArchiveSection: React.FC = () => {
  const archiveItems = [
    { text: '메인페이지 플로우', count: 3 },
    { text: '디자인시스템 시안1', count: 12 },
    { text: '컬러시스템(확정)', count: 7 },
    { text: '메인페이지 플로우', count: 3 },
    { text: '컬러시스템(확정)', count: 7 },
    { text: '컬러시스템(확정)', count: 7 },
  ];

  return (
    <ArchiveWrapper>
      <ArchiveContent hasScrollbar={archiveItems.length > 5}>
        <CreateButton>+ Create</CreateButton>
        {archiveItems.map((item, index) => (
          <ArchiveItem key={index}>
            <ArchiveText>
              {item.text}
              <CircleIcon />
              <ArchiveCountText>{item.count}</ArchiveCountText>
            </ArchiveText>
            <DotsIcon>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6 12C6 12.5304 5.78929 13.0391 5.41421 13.4142C5.03914 13.7893 4.53043 14 4 14C3.46957 14 2.96086 13.7893 2.58579 13.4142C2.21071 13.0391 2 12.5304 2 12C2 11.4696 2.21071 10.9609 2.58579 10.5858C2.96086 10.2107 3.46957 10 4 10C4.53043 10 5.03914 10.2107 5.41421 10.5858C5.78929 10.9609 6 11.4696 6 12Z" />
                <path d="M21.4142 13.4142C21.7893 13.0391 22 12.5304 22 12C22 11.4696 21.7893 10.9609 21.4142 10.5858C21.0391 10.2107 20.5304 10 20 10C19.4696 10 18.9609 10.2107 18.5858 10.5858C18.2107 10.9609 18 11.4696 18 12C18 12.5304 18.2107 13.0391 18.5858 13.4142C18.9609 13.7893 19.4696 14 20 14C20.5304 14 21.0391 13.7893 21.4142 13.4142Z" />
                <path d="M13.4142 13.4142C13.7893 13.0391 14 12.5304 14 12C14 11.4696 13.7893 10.9609 13.4142 10.5858C13.0391 10.2107 12.5304 10 12 10C11.4696 10 10.9609 10.2107 10.5858 10.5858C10.2107 10.9609 10 11.4696 10 12C10 12.5304 10.2107 13.0391 10.5858 13.4142C10.9609 13.7893 11.4696 14 12 14C12.5304 14 13.0391 13.7893 13.4142 13.4142Z" />
              </svg>
            </DotsIcon>
          </ArchiveItem>
        ))}
      </ArchiveContent>
    </ArchiveWrapper>
  );
};

const ArchiveWrapper = styled.div`
  width: 520px;
  height: 368px;
  border-radius: 8px;
  border: 0.5px solid ${({ theme }) => theme.colors.grey80};
  display: flex;
  flex-direction: column;
`;

const ArchiveContent = styled.div<{ hasScrollbar: boolean }>`
  border: 1px solid ${({ theme }) => theme.colors.grey80};
  padding-left: ${({ hasScrollbar }) => (hasScrollbar ? '12px' : '0')}; /* Remove left padding if no scrollbar */
  padding-top: 12px;
  border-radius: 6px;
  flex: 1;
  overflow-y: auto;
  height: 400px;
  scrollbar-width: thin;
  scrollbar-color: ${({ theme }) => theme.colors.grey70} transparent;

  &::-webkit-scrollbar {
    width: ${({ hasScrollbar }) => (hasScrollbar ? '6px' : '0')};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.grey60};
    border-radius: 10px;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ArchiveItem = styled.div`
  background-color: ${({ theme }) => theme.colors.grey80};
  width: 100%;
  height: 48px;
  padding: 12px 16px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.grey70};
  margin-bottom: 8px;
  max-width: 496px;
`;

const ArchiveText = styled(SmallText)`
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  gap: 8px;
`;

const CircleIcon = styled.div`
  width: 6px;
  height: 6px;
  background-color: ${({ theme }) => theme.colors.base};
  border-radius: 50%;
  margin-left: 8px;
  margin-top: -5px;
`;

const ArchiveCountText = styled(SmallText)`
  color: ${({ theme }) => theme.colors.white};
  margin-left: -3px;
`;

const DotsIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;

  svg {
    fill: #525658;
    width: 16px;
    height: 16px;
  }
`;

const CreateButton = styled(MediumText)`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.tint20};
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.grey60};
  border-radius: 8px;
  cursor: pointer;
  width: 100%;
  height: 48px;
  text-align: center;
  margin-bottom: 8px;
  max-width: 496px;
`;

export default ArchiveSection;
