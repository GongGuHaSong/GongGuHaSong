package solabo.GongGuHaSong.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import solabo.GongGuHaSong.domain.Sell;


public interface SellRepository extends MongoRepository<Sell,String> {

}
