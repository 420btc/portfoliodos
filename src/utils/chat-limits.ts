/**
 * Utility for managing chat usage limits
 * Tracks AI responses and enforces limits (10 responses per 12 hours)
 */

// Type definitions
interface ChatUsage {
  responses: number;
  lastReset: number; // timestamp
}

// Constants
const MAX_RESPONSES = 10;
const RESET_INTERVAL = 12 * 60 * 60 * 1000; // 12 hours in milliseconds
const STORAGE_KEY = 'chat_usage';

/**
 * Get current chat usage from local storage
 */
export function getChatUsage(): ChatUsage {
  const storedUsage = localStorage.getItem(STORAGE_KEY);
  
  if (!storedUsage) {
    return { responses: 0, lastReset: Date.now() };
  }
  
  return JSON.parse(storedUsage);
}

/**
 * Check if user has reached their response limit
 */
export function hasReachedLimit(): boolean {
  const usage = getChatUsage();
  const now = Date.now();
  
  // Reset counter if 12 hours have passed
  if (now - usage.lastReset > RESET_INTERVAL) {
    resetUsage();
    return false;
  }
  
  return usage.responses >= MAX_RESPONSES;
}

/**
 * Increment response counter
 */
export function incrementResponseCount(): void {
  const usage = getChatUsage();
  const now = Date.now();
  
  // Reset if 12 hours have passed
  if (now - usage.lastReset > RESET_INTERVAL) {
    resetUsage();
    incrementResponseCount();
    return;
  }
  
  // Increment counter
  usage.responses += 1;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(usage));
}

/**
 * Reset usage counter
 */
export function resetUsage(): void {
  const usage = { responses: 0, lastReset: Date.now() };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(usage));
}

/**
 * Get remaining responses
 */
export function getRemainingResponses(): number {
  const usage = getChatUsage();
  const now = Date.now();
  
  // Reset if 12 hours have passed
  if (now - usage.lastReset > RESET_INTERVAL) {
    resetUsage();
    return MAX_RESPONSES;
  }
  
  return MAX_RESPONSES - usage.responses;
}

/**
 * Get time until reset (in milliseconds)
 */
export function getTimeUntilReset(): number {
  const usage = getChatUsage();
  const now = Date.now();
  const resetTime = usage.lastReset + RESET_INTERVAL;
  
  return Math.max(0, resetTime - now);
}

/**
 * Format time until reset in human-readable format
 */
export function getFormattedTimeUntilReset(): string {
  const milliseconds = getTimeUntilReset();
  
  if (milliseconds <= 0) {
    return "0h 0m";
  }
  
  const hours = Math.floor(milliseconds / (1000 * 60 * 60));
  const minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));
  
  return `${hours}h ${minutes}m`;
}
