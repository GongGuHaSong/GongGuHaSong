package GongGuHaSong.repository;

import GongGuHaSong.domain.Sell;
import org.springframework.data.mongodb.repository.MongoRepository;


public interface SellRepository extends MongoRepository<Sell,String> {

}
