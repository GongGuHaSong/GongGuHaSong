package solabo.GongGuHaSong.web;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import solabo.GongGuHaSong.domain.Board;
import solabo.GongGuHaSong.domain.Like;
import solabo.GongGuHaSong.repository.BoardRepository;
import solabo.GongGuHaSong.repository.LikeRepository;
import solabo.GongGuHaSong.web.dto.BoardSaveDto;
import solabo.GongGuHaSong.web.dto.LikeSaveDto;

import java.util.List;

@RequiredArgsConstructor //DI
@RestController //데이터 리턴 서버
public class LikeController {
    //DI
    private final LikeRepository likeRepository;

//http://localhost:8080/my/like?id=1
    @DeleteMapping("my/like/{id}") //인덱스 번호로 삭제
    public int deleteById(@PathVariable String id){
        likeRepository.deleteById(id);
        return 1; //1:성공, -1:실패
    }

    @GetMapping("/my/like/{id}")
    public Like findById(@PathVariable String id) {
        return likeRepository.findById(id).get();
    }


    @GetMapping("/my/like")
    public List<Like> findAll(){
        return likeRepository.findAll();
    }

    @PostMapping("/my/like")
    public Like save(@RequestBody LikeSaveDto dto) {
        Like likeEntity = likeRepository.save(dto.toEntity());
        return likeEntity;
    }
}
