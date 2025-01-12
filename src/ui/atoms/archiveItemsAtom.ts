import { atom } from 'recoil';

export interface Task {
  name: string;
  text: string;
  page: string;
  time: string;
}

export interface TasksState {
  yet: Task[];
  doing: Task[];
  done: Task[];
  mentioned: Task[];
}

export interface Shoot {
  username: string;
  imgUrl: string;
  content: string;
  timestamp: string;
}

// 블록 생성 -> 좌표 
export interface BlockItem {
  text: string;
  count: number;
  tasks: TasksState;
  shoots: Shoot[];
  coordinates?: { x: number; y: number; width: number; height: number };
  node?: SceneNode;
}

export interface ArchiveItem {
  text: string;
  count: number;
  blocks: BlockItem[];
}

// 블록 생성 함수
const createBlocks = (blockCount: number): BlockItem[] => {
  const blocks: BlockItem[] = [];
  for (let i = 1; i <= blockCount; i++) {
    blocks.push({
      text: `완료_메인 구성_${i}`,
      count: i,
      tasks: {
        yet: [],
        doing: [
          { name: 'JIN', text: `플로우 다 확인했나요?`, page: '메인페이지 플로우 | ', time: '2 hours ago' },
          { name: 'SUJIN.K', text: `디자인 검토 완료했습니다.`, page: '메인페이지 플로우 | ', time: '5 hours ago' },
        ],
        done: [
          { name: 'CRYSTAL', text: `작업이 모두 완료되었습니다.`, page: '메인페이지 플로우 | ', time: '1 day ago' },
        ],
        mentioned: [
          { name: 'GAUN', text: `@SUJIN.K 최신 디자인 시스템 확인 부탁드립니다.`, page: '메인페이지 플로우 | ', time: '4 hours ago' },
        ],
      },
      shoots: [
        {
          username: '류남정',
          imgUrl: 'https://github.com/user-attachments/assets/874b4541-4c2a-474d-826f-3df83eab4711',
          content: `상탑 탭 로고 기깔나네! 이 상단 탭 완성본인가요? `,
          timestamp: '12 hours ago',
        },
        {
          username: '기개디',
          imgUrl: 'https://github.com/user-attachments/assets/7ad458c5-3246-45db-b436-f8e30352e806',
          content: `아뇨 아직이요`,
          timestamp: '10 hours ago',
        },
      ],
    });
  }
  return blocks;
};

const createArchives = (archiveCount: number, blockCount: number): ArchiveItem[] => {
  const archives: ArchiveItem[] = [];
  for (let i = 1; i <= archiveCount; i++) {
    archives.push({
      text: `메인페이지 플로우`,
      count: blockCount,
      blocks: createBlocks(blockCount),
    });
  }
  return archives;
};

export const archiveItemsAtom = atom<ArchiveItem[]>({
  key: 'archiveItemsAtom',
  default: createArchives(19, 19),
});
