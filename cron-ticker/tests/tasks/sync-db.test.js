const { syncDB } = require('../../tasks/sync-db');

describe('Pruebas en Sync-Db', () => {

    test('debe de Ejecutar el proceso 2 veces', () => {
        syncDB();
        const times = syncDB();

        expect(times).toBe(2)
    })

})

// docker buildx build --platform linux/amd64,linux/arm64 linux/arm64,linux/arm/v7 -t jamesgiraldo/cron-ticker --push .

// docker buildx build --platform linux/amd64,linux/arm64 -t jamesgiraldo/cron-ticker:oso --push .