package solabo.GongGuHaSong.repository;

import org.springframework.data.domain.Example;
import org.springframework.data.mongodb.repository.MongoRepository;
import solabo.GongGuHaSong.domain.Sell;

import java.util.List;


public interface SellRepository extends MongoRepository<Sell,String> {
    List<Sell> findByTitle(String title);
}
