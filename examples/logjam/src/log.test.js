import { expect, it, vi, beforeEach, afterEach, describe } from 'vitest';
import { log } from './log';

const sendMock = vi.mock('./send-to-server', () => {
    return { sendToServer: vi.fn() }
})

import { sendToServer } from './send-to-server'

describe('logger', () => {
    describe('development', () => {
        beforeEach(() => {
            vi.stubEnv('MODE', 'development')
        });

        afterEach(() => {
            vi.restoreAllMocks()
        })

        it('logs to the console in development mode', () => {
            const logSpy = vi.spyOn(console, 'log')

            log('Hello world')

            expect(logSpy).toHaveBeenCalledWith('Hello world')
        })
    })

    describe('production', () => {
        beforeEach(() => {
            vi.stubEnv('MODE', 'production')
        });

        afterEach(() => {
            vi.restoreAllMocks()
        })

        it('does not log to the console in production mode', () => {
            const logSpy = vi.spyOn(console, 'log')

            log('Hello world')

            expect(logSpy).not.toHaveBeenCalled()
            expect(sendToServer).toHaveBeenCalled()
        })
    })
});
