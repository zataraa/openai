import { repository as inMemoryRepository } from '@/lib/adapters/inMemoryAdapter';
import { Repository } from '@/lib/repositories/base';

let activeRepository: Repository = inMemoryRepository;

export function setRepository(repo: Repository) {
  activeRepository = repo;
}

export function getRepository(): Repository {
  return activeRepository;
}
