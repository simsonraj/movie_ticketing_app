import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { INestApplication } from '@nestjs/common';
import { RolesGuard } from '../src/gaurds/roles.guard';
import * as config from '../config/config';

describe('AppController (e2e)', () => {
    let app: INestApplication;

    beforeEach(async() => {
        const module = await Test.createTestingModule({
        imports: [AppModule],
        })
        .overrideGuard(RolesGuard)
        .useValue(config.getEnv().access)
        .compile();

        app = module.createNestApplication();
        await app.init();
    });

    it('/GET health', () => {
        return request(app.getHttpServer())
        .get('/health')
        .expect(200)
        .expect({
            statusCode: 200,
            message: 'App running!',
            data: {},
            error: {},
        });
    });

    it('/GET enrollAdmin', () => {
        return request(app.getHttpServer())
        .get('/enrollAdmin')
        .expect(200)
        .expect({
            statusCode: 200,
            message: 'admin Registered Successfully!',
            data: {},
            error: {},
        });
    });

    it('/POST invoke', () => {
        return request(app.getHttpServer())
        .post('/invoke')
        .send({
            method: 'registerTheatre',
            args: 
            {"theatreName":"A Studios","windows":4,"ticketsPerShow":100,"showsDaily":4,"sodaStock":200,"halls":5},
        })
        .expect(201);
    });

    
    it('/POST invoke', () => {
        return request(app.getHttpServer())
        .post('/invoke')
        .send({
            method: 'registerTheatre',
            args: 
            {"theatreName":"B Studios","windows":4,"ticketsPerShow":100,"showsDaily":4,"sodaStock":200,"halls":5},
        })
        .expect(201);
    });

    it('/POST invoke', () => {
        return request(app.getHttpServer())
        .post('/invoke')
        .send({
            method: 'createShow',
            args: 
            {"TheatreNo":4184,"Shows":[{"movie":"Mission Impossible","hallNo":1},{"movie":"Pirates of the Caribbean","hallNo":2},{"movie":"Avengers","hallNo":3},{"movie":"Iron Man","hallNo":4}]},
        })
        .expect(201);
    });

    
    it('/POST invoke', () => {
        return request(app.getHttpServer())
        .post('/invoke')
        .send({
            method: 'purchaseTicket',
            args: 
            {"show":{"showID":1},"window":{"windowNo":1},"quantity":2},
        })
        .expect(201);
    });

    
    it('/POST invoke', () => {
        return request(app.getHttpServer())
        .post('/invoke')
        .send({
            method: 'issueCoupon',
            args: 
            {"ticketNo":1},
        })
        .expect(201);
    });

     
    it('/POST invoke', () => {
        return request(app.getHttpServer())
        .post('/invoke')
        .send({
            method: 'availExchange',
            args: 
            {"ticketNo":1},
        })
        .expect(201);
    });


/*
    it('/POST query by ID', () => {
        return request(app.getHttpServer())
        .post('/query')
        .send({
            method: 'queryByID',
            args: '1',
        })
        .expect(201);
    });
*/
});
