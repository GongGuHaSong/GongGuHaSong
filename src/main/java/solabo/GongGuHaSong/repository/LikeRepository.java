package solabo.GongGuHaSong.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import solabo.GongGuHaSong.domain.Board;
import solabo.GongGuHaSong.domain.Like;

public interface LikeRepository extends MongoRepository<Like,String> {
}
