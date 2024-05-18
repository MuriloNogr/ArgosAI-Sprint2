package br.com.fiap.argosai.controller;

import br.com.fiap.argosai.controller.dto.ProdutoDTO;
import br.com.fiap.argosai.model.Produto;
import br.com.fiap.argosai.service.ProdutoService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/produtos")
@Validated
public class ProdutoController {
    @Autowired
    private ProdutoService produtoService;

    @Autowired
    private ModelMapper modelMapper;

    @GetMapping
    public List<ProdutoDTO> getAllProdutos() {
        return produtoService.findAll().stream()
                .map(this::convertToDto)
                .collect(Collectors.toList());
    }

    @GetMapping("/{id}")
    public ResponseEntity<ProdutoDTO> getProdutoById(@PathVariable Long id) {
        return produtoService.findById(id)
                .map(produto -> ResponseEntity.ok(convertToDto(produto)))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ProdutoDTO createProduto(@Valid @RequestBody ProdutoDTO produtoDTO) {
        Produto produto = convertToEntity(produtoDTO);
        return convertToDto(produtoService.save(produto));
    }

    @PutMapping("/{id}")
    public ResponseEntity<ProdutoDTO> updateProduto(@PathVariable Long id, @Valid @RequestBody ProdutoDTO produtoDTO) {
        return produtoService.findById(id)
                .map(produtoExistente -> {
                    Produto produto = convertToEntity(produtoDTO);
                    produto.setId(id);
                    return ResponseEntity.ok(convertToDto(produtoService.save(produto)));
                }).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteProduto(@PathVariable Long id) {
        return produtoService.findById(id)
                .map(produto -> {
                    produtoService.deleteById(id);
                    return ResponseEntity.ok().build();
                }).orElseGet(() -> ResponseEntity.notFound().build());
    }

    private ProdutoDTO convertToDto(Produto produto) {
        return modelMapper.map(produto, ProdutoDTO.class);
    }

    private Produto convertToEntity(ProdutoDTO produtoDTO) {
        return modelMapper.map(produtoDTO, Produto.class);
    }
}
