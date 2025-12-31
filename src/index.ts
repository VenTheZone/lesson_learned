import type { Plugin } from '@opencode-ai/plugin';
import { tool } from '@opencode-ai/plugin';

export const continualLearningPlugin: Plugin = async ({ project, config }) => {
  console.log('🔄 Loading Continual Learning plugin...');

  return {
    tool: {
      description: 'Continual learning - learn from every task and build persistent knowledge',
    },

    async config(config) {
      console.log('📦 Configuring Continual Learning commands...');
      
      // Register /smart-task command
      config.command = {
        ...config.command,
        'smart-task': {
          template: `.opencode/command/smart-task.md`,
          description: 'Execute task with continual learning workflow',
        }
      };
    }
  };
};
