package GongGuHaSong.repository;

import GongGuHaSong.domain.Like;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface LikeRepository extends MongoRepository<Like,String> {
}